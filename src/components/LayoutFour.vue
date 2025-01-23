<template>
  <div class="flex h-full justify-between items-center flex-col md:flex-row"> 
    <div class="w-full md:w-2/6">
      <YearTitleText :event="event" />
    </div>
      <div class="w-full md:w-4/6 relative h-full flex flex-col md:flex-row">
        <ColorColumnWithImages :image1="event.image1" :image2="event.image2" color="blue" />
        <div v-if="event.text2" class="flex flex-col justify-center md:pr-16 2xl:pr-24 md:pt-48 z-10 md:h-full">
          <h3>{{ event.text2.title }}</h3>
          <p v-html="event.text2.content"></p>
        </div>
      </div>
    
  </div>   
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Event } from '../types/Events';
import YearTitleText from './YearTitleText.vue';
import ColorColumnWithImages from './ColorColumnWithImages.vue';

defineProps<{
  event: Event
}>();

</script>
