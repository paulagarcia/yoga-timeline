<template>
  <div class="page-wrapper">
    <div class="w-1/12">
      <TimeLine @selectedEventId="handleSelectedEventId" />
    </div>
    <div class="w-11/12">
      <ContentGenerator :eventId="selectedEventId" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ContentGenerator from '@/components/ContentGenerator.vue';
import TimeLine from '@/components/TimeLine.vue';
import { ref } from 'vue';
import events from '@/data/events.json';

const selectedEventId = ref<number>(1);
const selectedEvent = ref(events.find(event => event.id === selectedEventId.value));

const handleSelectedEventId = (id: number) => {
  selectedEventId.value = id;
  selectedEvent.value = events.find(event => event.id === id);
};
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