<template>
  <div class="flex h-full justify-between items-center">
    <div class="w-2/6 2xl:w-3/5">
      <YearTitleText :event="event" />
    </div>

    <div class="w-4/6 2xl:w-3/5 relative h-full flex flex-col justify-end">
      <img v-if="imageSrcTop" class="absolute top-0 right-0 top-image" :src="imageSrcTop" alt="Mapa" />
      <div class="flex">
        <ColorColumnWithImages :image1="event.image1" :image2="event.image2" />
        <div v-if="event.text2" class="flex flex-col  pr-16 pb-16 2xl:pr-24 2xl:pb-24 z-10" :class="[imageSrcTop ? 'justify-center' : 'justify-start']">
          <h3>{{ event.text2.title }}</h3>
          <p v-html="event.text2.content"></p>
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
  max-width: 420px;
  /* width: 54%; */
  height: auto;
  display: block;
  margin: 0 auto;
}
</style>
