<template>
  <div class="flex h-full justify-between items-center flex-col md:flex-row">
    <div class="w-full md:w-2/6">
      <YearTitleText :event="event" />
    </div>
    <div v-if="event.table1 && event.table2" class="w-full md:w-4/6 h-full flex p-4 pl-0 items-center 2xl:p-8 justify-center">
      <div class="yellow-column hidden md:block"></div>
      <div class="flex flex-col">

        <h3 class="mt-8">{{ event.table1.title }}</h3>
        <!-- Solo texto -->
        <div v-if="event.table1.content.length == 1">
          <p v-if="event.table1.content[0].cellTitle" class="cell-title">{{ event.table1.content[0].cellTitle }}</p>
          <p class="pr-16 text-sm" v-html="event.table1.content[0].cell"></p>
        </div>
        <!-- Tabla  -->
        <div v-else class="grid grid-cols-2 gap-4">
          <div v-for="(content, index) in event.table1.content" :key="index" :class="{'col-span-2': event.table1.content.length != 4 && index == 2}">
            <p v-if="content.cellTitle" class="cell-title">{{ content.cellTitle }}</p>
            <p class="pr-4 text-sm" v-html="content.cell"></p>
          </div>
        </div>
      
        <h3 class="mt-8">{{ event.table2.title }}</h3>
        <!-- Solo texto -->
        <div v-if="event.table2.content.length == 1">
          <p v-if="event.table2.content[0].cellTitle" class="cell-title">{{ event.table2.content[0].cellTitle }}</p>
          <p class="pr-16 text-sm" v-html="event.table2.content[0].cell"></p>
        </div>
        <!-- Tabla  -->
        <div v-else class="grid grid-cols-2 gap-4"> 
          <div v-for="(content, index) in event.table2.content" :key="index" :class="{'col-span-2': event.table2.content.length == 3 && index == 2}">
            <p v-if="content.cellTitle" class="cell-title">{{ content.cellTitle }}</p>
            <p class="pr-4 text-sm" v-html="content.cell"></p>
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
  font-size: 1.1rem;
  line-height: 1.3;
  font-family: "Shadows Into Light Two", serif;
  font-weight: 400;
  font-style: normal;
  color: var(--yellow);
}

h3 {
    font-size: 1.7rem;
    font-family: "Shadows Into Light Two", serif;
    margin-bottom: 1rem;
    font-weight: 400;
    font-style: normal;
    position: relative;
    left: -2rem;
    background: #efcda082;
    padding: 0.5rem;
    padding-left: 2rem;
}

@media only screen and (min-width: 768px) {
  h3 {
    left: -10rem;
    padding-left: 162px;
  }
}
.yellow-column {
    background-color: var(--force-blue);
    width: 98px;
    height: 78vh;
    margin-right: 16px;
    min-width: 98px;
    position: relative;
    top: -10rem;
}

</style>