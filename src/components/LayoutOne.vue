<template>
  <div class="flex h-full justify-between items-center"> 
    <div class="w-2/5 pr-16">
      <YearTitleText :event="event" />
    </div>
    <div class="w-3/5 relative h-full flex flex-col justify-end">
      <img class="absolute top-0 right-0 top-image" :src="imageSrcTop" alt="Mapa"/>
      <div class="flex">
        <BlueColumnWithImages :image1="event.image1" :image2="event.image2" />
        <div class="flex flex-col justify-end pr-24 pb-24">
          <h3>{{ event.text2.title }}</h3>
          <p v-html="event.text2.content"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { Event } from '@/types/Events';
import YearTitleText from './YearTitleText.vue';
import BlueColumnWithImages from './BlueColumnWithImages.vue';

const props = defineProps<{
  event: Event
}>();

const imageSrcTop = computed(() => new URL(`../assets/images/${props.event.imageTop}`, import.meta.url).href);
</script>

<style scoped>
.top-image {
  max-width: 54%;
  width: 54%;
  height: auto;
  display: block;
  margin: 0 auto;
}


</style>