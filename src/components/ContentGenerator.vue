<template>
  <template v-if="event && event.layoutId == 0">
    <LayoutHome :event="event" />
  </template>
  <template v-else-if="event && event.layoutId == 1">
    <LayoutOne :event="event" />
  </template>
  <template v-else-if="event && event.layoutId == 2">
    <LayoutTwo :event="event" />
  </template>
  <template v-else-if="event && event.layoutId == 3">
    <LayoutThree :event="event" />
  </template>
  <template v-else-if="event && event.layoutId == 4">
    <LayoutFour :event="event" />
  </template>
  <div v-else>
    <p>Evento no encontrado</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import events from '../data/events.json';
import LayoutHome from './LayoutHome.vue';
import LayoutOne from './LayoutOne.vue';
import LayoutTwo from './LayoutTwo.vue';
import LayoutThree from './LayoutThree.vue';
import LayoutFour from './LayoutFour.vue';
import { Event } from '../types/Events';

const props = defineProps<{ eventId: number }>();
const event = computed<Event | null>(() => events.find(event => event.id === props.eventId) || null);

</script>

<style scoped>
/* Tus estilos aquí */
</style>