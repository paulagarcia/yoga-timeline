<template>
  <div class="flex h-full justify-between items-center flex-col md:flex-row">
    <div class="w-full md:w-2/6 ">
      <YearTitleText :event="event" />
    </div>

    <div class="w-full md:w-4/6 relative h-full flex flex-col justify-end">
      <img v-if="imageSrcTop" class="hidden md:block md:absolute top-0 right-0 top-image" :src="imageSrcTop" alt="Mapa" />
      <div class="flex flex-col md:flex-row">
        <ColorColumnWithImages :image1="event.image1" :image2="event.image2" />
        <div v-if="event.text2" class="flex z-10">
          <div class="flex flex-col w-full md:w-11/12" :class="[imageSrcTop ? 'justify-center' : 'justify-start']">
            <h3>{{ event.text2.title }}</h3>
            <p v-html="event.text2.content"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";
import { Event } from "../types/Events";
import YearTitleText from "./YearTitleText.vue";
import ColorColumnWithImages from "./ColorColumnWithImages.vue";

const props = defineProps<{
  event: Event;
}>();

const imageSrcTop = computed(() =>
  props.event.imageTop
    ? new URL(`../assets/images/${props.event.imageTop}`, import.meta.url).href
    : null
);
</script>

<style scoped>
.top-image {
  max-width: 395px;
  height: auto;
  margin: 0 auto;
}
</style>
