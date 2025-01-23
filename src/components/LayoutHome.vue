<template>
  <div class="flex justify-between h-full">
    <div class="w-1/2 border-page flex items-center">
      <div class="flex flex-col justify-center">
        <h1 class="leading-none mb-2" v-html="event.title"></h1>
        <h2 class="uppercase mb-4 font-extrabold">{{ event.text1.title }}</h2>
        <p class="pr-10" v-html="event.text1.content"></p>
      </div>
    </div>
    <div class="w-1/2 flex flex-col justify-center items-center">
      <div class="h-1/2 flex items-end justify-center px-8">
        <p class="" v-if="event.text2" v-html="event.text2.content"></p>
      </div>
      <div class="h-1/2 flex justify-center items-center flex-wrap">
        <img :src="imageSrc" alt="Image" class="yoga-img" />
      </div>
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
.yoga-img {
  width: auto;
  max-height: 100%;
  min-width: 100%;
}
</style>