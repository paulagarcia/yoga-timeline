<template>
  <div class="flex md:h-full justify-between items-center flex-col md:flex-row">
    <div class="w-full md:w-2/6">
      <YearTitleText :event="event" />
    </div>
    <div v-if="event.cards" class="w-full md:w-4/6 flex flex-col h-full justify-between">
      <!-- Primera card a la izquierda -->
      <div class="flex flex-col w-full">
        <div class="flex justify-start">
          <div class="color-column"></div>
          <div class="flex flex-col justify-center md:justify-end md:pb-8">
            <h4 class="color-text-primary">{{ event.cards[0].title }}</h4>
            <p class="year">{{ event.cards[0].subtitle }}</p>
            <img :src="image1Src" alt="Image 1" class="image block md:hidden" />
          </div>
        </div>
        <div class="flex items-center relative md:bottom-5 md:right-10 flex-col md:flex-row">
          <img :src="image1Src" alt="Image 1" class="image hidden md:block" />
          <p v-html="event.cards[0].content" class="md:ml-4 md:max-w-md"></p>
        </div>
      </div>
      <!-- Segunda y tercera card a la derecha -->
      <div class="relative w-full md:mr-4 overflow-hidden md:overflow-visible">
        <div class="color-column-right"></div>
        <div class="flex justify-end items-center relative mb-2 z-10">
          <div class="flex flex-col items-end mr-4">
            <h4 class="color-text-primary">{{ event.cards[1].title }}</h4>
            <p class="year mb-2">{{ event.cards[1].subtitle }}</p>
            <p class="text-right max-w-lg" v-html="event.cards[1].content"></p>
          </div>
          <div class="flex justify-between items-end">
            <img :src="image2Src" alt="Image 2" class="image" />
          </div>
        </div>
		<!-- Tercera -->
		<div class="flex justify-end items-center relative z-10 md:-mt-2 mt-6">
          <div class="flex flex-col items-end md:mr-4">
            <h4 class="color-text-primary">{{ event.cards[2].title }}</h4>
            <p class="year mb-2">{{ event.cards[2].subtitle }}</p>
            <p class="text-right max-w-lg" v-html="event.cards[2].content"></p>
          </div>
          <div class="flex justify-between items-end">
            <img :src="image3Src" alt="Image 2" class="image" />
          </div>
        </div>
      </div>
      <!-- Cuarta card a la izquierda -->
      <div class="flex flex-col justify-center relative w-full overflow-hidden md:overflow-visible mt-6 md:mt-0">
		    <div class="color-column-bottom"></div>
        <div class="flex flex-col  md:items-start items-end">
          
            <h4 class="ml-20 color-text-primary">{{ event.cards[3].title }}</h4>
            <p class="year ml-20">{{ event.cards[3].subtitle }}</p>
            <img :src="image4Src" alt="Image 3" class="image block md:hidden" />
          
          <div class="flex items-center relative z-10 md:bottom-0 md:right-10">
            <img :src="image4Src" alt="Image 3" class="image mr-4 hidden md:block" />
            <p class="max-w-md ml-8 text-right md:text-left md:ml-0" v-html="event.cards[3].content"></p>
          </div>
        </div>
       </div>
	   </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { Event } from '../types/Events';
import YearTitleText from "./YearTitleText.vue";

const props = defineProps<{
  event: Event
}>();

const image1Src = computed(() => props.event.cards ? new URL(`../assets/images/${props.event.cards[0].image}`, import.meta.url).href : '');
const image2Src = computed(() => props.event.cards ? new URL(`../assets/images/${props.event.cards[1].image}`, import.meta.url).href : '');
const image3Src = computed(() => props.event.cards ? new URL(`../assets/images/${props.event.cards[2].image}`, import.meta.url).href : '');
const image4Src = computed(() => props.event.cards ? new URL(`../assets/images/${props.event.cards[3].image}`, import.meta.url).href : '');
</script>

<style scoped>
h4 {
  font-size: 1.8rem;
  line-height: 1.5;
  font-family: "Shadows Into Light Two", serif;
  font-weight: 400;
  font-style: normal;
  
}
.color-column-bottom {
	position: absolute;
	width: 58px;
	left:0;
	height: 300px;
	bottom: 0px;
	background-color: var(--powder-blue);
}

.color-column-right {
	position: absolute;
	width: 58px;
	right: 37px;
	height: 474px;
	bottom: 17px;
	background-color: var(--force-blue);
}
.color-column {
	width: 58px;
    background-color: var(--powder-blue);
    margin-right: 1rem;
    height: 155px;
}

.year {
	font-weight: 500;
    color: var(--yellow);
    font-size: 1.3rem;
    line-height: 1;
    letter-spacing: -2px;
}

.image {
  max-width: 180px;
  width: 180px;
  height: auto;
  border-radius: 8px;
 
}
</style>
