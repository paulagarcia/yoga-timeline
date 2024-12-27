<template>
  <div class="page-wrapper">
    <div class="w-1/12">
      <TimeLine :eventId="selectedEventId" />
    </div>
    <div class="w-11/12">
      <ContentGenerator :eventId="selectedEventId" :id="eventId"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import ContentGenerator from '@/components/ContentGenerator.vue';
import TimeLine from '@/components/TimeLine.vue';
import { defineProps, ref, watch } from 'vue';
import events from '@/data/events.json';
import { Event } from '../types/Events';

const props = defineProps<{ eventId: number }>();

const selectedEventId = ref<number>();
const selectedEvent = ref<Event | null>(events.find((event: Event) => event.id === selectedEventId.value) || null);


watch(() => props.eventId, (newValue) => {
  selectedEventId.value = newValue;
  selectedEvent.value = events.find((event: Event) => event.id === newValue) || null;
}, { deep: true, immediate: true  });

</script>

<style scoped>
.page-wrapper {
  display: flex;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  background-color: var(--floral-white);
  font-family: 'Montserrat Alternates', sans-serif;
}
</style>