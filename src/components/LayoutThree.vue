<template>
  <div class="flex h-full justify-between items-center">
    <div class="w-2/5 pr-16">
      <YearTitleText :event="event" />
    </div>
    <div class="w-3/5 h-full flex flex-col items-center justify-between">
      <!-- Primera card a la izquierda -->
      <div class="flex flex-col w-full">
        <div class="flex justify-start">
          <div class="color-column"></div>
          <div class="flex flex-col justify-end pb-8">
            <h4>{{ event.cards[0].title }}</h4>
            <p class="year">{{ event.cards[0].subtitle }}</p>
          </div>
        </div>
        <div class="flex items-center relative bottom-5 right-10">
          <img :src="image1Src" alt="Image 1" class="image" />
          <p v-html="event.cards[0].content" class="ml-4 max-w-md"></p>
        </div>
      </div>
      <!-- Segunda y tercera card a la derecha -->
      <div class="relative w-full mr-4">
        <div class="color-column-right"></div>
        <div class="flex justify-end items-center relative mb-8 z-10">
          <div class="flex flex-col items-end mr-4">
            <h4>{{ event.cards[1].title }}</h4>
            <p class="year mb-2">{{ event.cards[1].subtitle }}</p>
            <p class="text-right" v-html="event.cards[1].content"></p>
          </div>
          <div class="flex justify-between items-end">
            <img :src="image2Src" alt="Image 2" class="image" />
          </div>
        </div>
		<!-- Tercera -->
		<div class="flex justify-end items-center relative z-10">
          <div class="flex flex-col items-end mr-4">
            <h4>{{ event.cards[2].title }}</h4>
            <p class="year mb-2">{{ event.cards[2].subtitle }}</p>
            <p class="text-right" v-html="event.cards[2].content"></p>
          </div>
          <div class="flex justify-between items-end">
            <img :src="image3Src" alt="Image 2" class="image" />
          </div>
        </div>
      </div>
      <!-- Cuarta card a la izquierda -->
      <div class="flex flex-col justify-center relative w-full h-full">
		<div class="color-column-bottom"></div>
        <div class="flex flex-col flex-end ">
			<div>
				<h4 class="ml-20">{{ event.cards[3].title }}</h4>
            	<p class="year ml-20">{{ event.cards[3].subtitle }}</p>
			</div>
			<div class="flex items-center relative z-10 -bottom-4 right-10">
				<img :src="image4Src" alt="Image 3" class="image mr-4" />
				<p class="max-w-md" v-html="event.cards[3].content"></p>
			</div>
      	</div>
       </div>
	   </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { Event } from '@/types/Event';
import YearTitleText from "./YearTitleText.vue";

const props = defineProps<{
  event: Event
}>();

const image1Src = computed(() => new URL(`../assets/images/${props.event.cards[0].image}`, import.meta.url).href);
const image2Src = computed(() => new URL(`../assets/images/${props.event.cards[1].image}`, import.meta.url).href);
const image3Src = computed(() => new URL(`../assets/images/${props.event.cards[2].image}`, import.meta.url).href);
const image4Src = computed(() => new URL(`../assets/images/${props.event.cards[3].image}`, import.meta.url).href);
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


</style>
