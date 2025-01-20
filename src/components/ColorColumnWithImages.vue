<template>
  <div class="flex column-container" :class="bgColorClass">
    <div class="column"></div>
    <div class="flex flex-col relative" :class="[bgColorClass === 'blue' ? 'top-20' : 'top-8']">
        <img v-if="image1" :src="image1Src" alt="Image 1" class="image mb-8" />
        <img v-if="image2" :src="image2Src" alt="Image 2" class="image" />
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps<{
  image1?: string;
  image2?: string;
  color?: string;
}>();

const image1Src = computed(() => props.image1 ? new URL(`../assets/images/${props.image1}`, import.meta.url).href : '');
const image2Src = computed(() => props.image2 ? new URL(`../assets/images/${props.image2}`, import.meta.url).href : '');
const bgColorClass = computed(() => props.color ? props.color : 'yellow');
</script>

<style scoped>
.column-container {
  display: flex;
  justify-content: space-between;
  height: 100%;
  min-height: 68vh;
  &.blue {
    align-items: flex-start;
    .column {
      background-color: var(--powder-blue);
      height: 74%;
      width: 125px;
    }
  }
  &.yellow {
    align-items: center;
    .column{
      background-color: var(--sunset);
      height: 100%;
      width: 132px;
    }
  }
}


.image {
  max-width: 180px;
  width: 180px;
  height: auto;
  position: relative;
  right: 62px;
  border-radius: 8px;
  display: block;
  box-shadow: 0px 0px 0px 14px #f8f7f1;
}
</style>