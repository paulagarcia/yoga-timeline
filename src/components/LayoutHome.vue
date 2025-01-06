<template>
  <div class="layout-container">
    <div class="column justify-center border-page">
      <h1 class="yoga">{{ event.title }}</h1>
      <h2 class="uppercase mb-4 font-extrabold">{{ event.text1.title }}</h2>
      <p class="pr-10" v-html="event.text1.content"></p>
    </div>
    <div class="column justify-end">
      <p class="px-20 mb-12" v-if="event.text2">{{ event.text2.content }}</p>
      <img :src="imageSrc" alt="Image" />
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { Event } from '../types/Events';

const props = defineProps<{
  event: Event
}>();

const imageSrc = computed(() => new URL(`../assets/images/${props.event.image1}`, import.meta.url).href);
</script>

<style scoped>
.layout-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  
}
.yoga { 
  max-width: 215px; 
  line-height: 1; 
  margin-bottom: 1rem;
}

.column {
  flex: 1;
  display: flex;
  flex-direction: column;
  
  padding: 1rem;
  height: 100%;
  
}

.column img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}


</style>