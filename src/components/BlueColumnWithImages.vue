<template>
  <div class="flex column-container">
    <div class="blue-column h-full"></div>
    <div class="flex flex-col relative top-8">
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
}>();

const image1Src = computed(() => props.image1 ? new URL(`../assets/images/${props.image1}`, import.meta.url).href : '');
const image2Src = computed(() => props.image2 ? new URL(`../assets/images/${props.image2}`, import.meta.url).href : '');
</script>

<style scoped>
.column-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  min-height: 68vh;
}
.blue-column {
  background-color: var(--sunset);
  width: 132px;
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