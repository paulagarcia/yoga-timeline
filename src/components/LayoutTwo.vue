<template>
  <div class="flex h-full justify-between items-center"> 
    <div class="w-2/5 pr-16">
      <YearTitleText :event="event" />
    </div>
    <div v-if="event.table1 && event.table2" class="w-3/5 h-full flex  items-center p-8 justify-center">
      <div class="yellow-column"></div>
      <div class="flex flex-col">

        <h3 class="mt-8">{{ event.table1.title }}</h3>
        <div class="grid grid-cols-2 gap-4">
          <div v-for="(content, index) in event.table1.content" :key="index">
            <p class="cell-title">{{ content.cellTitle }}</p>
            <p class="pr-4" v-html="content.cell"></p>
          </div>
        </div>
      
        <h3 class="mt-8">{{ event.table2.title }}</h3>
        <div class="grid grid-cols-2 gap-4">
          <div v-for="(content, index) in event.table2.content" :key="index">
            <p class="cell-title">{{ content.cellTitle }}</p>
            <p class="pr-4" v-html="content.cell"></p>
          </div>
        </div>
      
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Event } from '../types/Events';
import YearTitleText from './YearTitleText.vue';


defineProps<{
  event: Event
}>();


</script>

<style scoped>
.cell-title {
  text-transform: uppercase;
  font-size: 1.2rem;
  line-height: 1.5;
  font-family: "Shadows Into Light Two", serif;
  font-weight: 400;
  font-style: normal;
  color: var(--yellow);
}

h3 {
  font-size: 2rem;
    font-family: "Shadows Into Light Two", serif;
    margin-bottom: 1rem;
    font-weight: 400;
    font-style: normal;
    position: relative;
    left: -12rem;
    background: #efcda082;
    padding: 0.5rem;
    padding-left: 200px;
}

.yellow-column {
    background-color: var(--force-blue);
    width: 132px;
    height: 68vh;
    margin-right: 16px;
    min-width: 132px;
    position: relative;
    top: -10rem;
}

</style>