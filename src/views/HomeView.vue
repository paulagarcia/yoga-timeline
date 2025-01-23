<template>
  <div class="page-wrapper relative md:max-h-screen md:h-screen">
    <div class="md:w-1/12 hidden md:block">
      <TimeLine :eventId="selectedEventId ?? 0" :id="eventId" />
    </div>
    <div class="w-full md:w-11/12 p-4 md:p-0">
      <ContentGenerator :eventId="selectedEventId ?? 0" :id="eventId"/>
    </div>
    
    <div v-if="hasBibliography" class="fixed book-container cursor-pointer" @click="isModalOpen = true">
      <img src="../assets/images/book.png" alt="Biblografia" class="w-20 h-20" />
    </div>
  </div>
  <BibliographyModal v-if="selectedEvent" :isOpen="isModalOpen" @update:isOpen="isModalOpen = $event" :bibliography="selectedEvent?.bibliography" />
</template>

<script setup lang="ts">
import ContentGenerator from '../components/ContentGenerator.vue';
import TimeLine from '../components/TimeLine.vue';
import BibliographyModal from '../components/BibliographyModal.vue';
import { computed, defineProps, ref, watch } from 'vue';
import events from '../data/events.json';
import { Event } from '../types/Events';

const props = defineProps<{ eventId: number }>();

const selectedEventId = ref<number>();
const selectedEvent = ref<Event | null>(events.find((event: Event) => event.id === selectedEventId.value) || null);
const hasBibliography = computed(() => selectedEvent.value && (selectedEvent.value.bibliography?.books.length > 0 || selectedEvent.value?.bibliography?.links.length > 0) );

const isModalOpen = ref(false);


watch(() => props.eventId, (newValue) => {
  selectedEventId.value = newValue;
  selectedEvent.value = events.find((event: Event) => event.id === newValue) || null;
  isModalOpen.value = false;
}, { deep: true, immediate: true  });

</script>

<style scoped>
.page-wrapper {
  display: flex;
  margin: 0 auto;
  background-color: var(--floral-white);
  font-family: 'Montserrat Alternates', sans-serif;
}

.book-container {
  bottom: -20px;
  border-radius: 50%;
  background: #f5ecdb;
  overflow: hidden;
  width: 8rem;
  height: 8rem;
  left: -20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 1rem;
  padding-left: 1rem;
}
</style>