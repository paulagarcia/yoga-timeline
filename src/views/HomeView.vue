<template>
  <div class="page-wrapper relative md:max-h-screen md:h-screen" >
    <!-- Timeline stays fixed -->
    <div class="md:w-1/12 hidden md:block">
      <TimeLine :eventId="selectedEventId ?? 0" :id="eventId" />
    </div>

    <!-- Content section with animation -->
    <div class="w-full md:w-11/12 p-4 md:p-0 relative md:overflow-hidden">
      <transition name="slide" mode="out-in">
        <ContentGenerator 
          v-if="selectedEventId" 
          :eventId="selectedEventId" 
          :key="selectedEventId" 
        />
      </transition>
    </div>

    <!-- Bibliography book icon -->
    <div v-if="hasBibliography" class="fixed book-container cursor-pointer" @click="isModalOpen = true">
      <img src="../assets/images/book.png" alt="Biblografia" class="w-20 h-20" />
    </div>

    <!-- Modal -->
    <BibliographyModal 
      v-if="selectedEvent" 
      :isOpen="isModalOpen" 
      @update:isOpen="isModalOpen = $event" 
      :bibliography="selectedEvent?.bibliography" 
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

import ContentGenerator from '../components/ContentGenerator.vue';
import TimeLine from '../components/TimeLine.vue';
import BibliographyModal from '../components/BibliographyModal.vue';
import events from '../data/events.json';
import { Event } from '../types/Events';

const props = defineProps<{ eventId: number }>();

// Event management
const selectedEventId = ref<number>();
const selectedEvent = ref<Event | null>(events.find((event: Event) => event.id === selectedEventId.value) || null);
const hasBibliography = computed(() => selectedEvent.value && (selectedEvent.value.bibliography?.books.length > 0 || selectedEvent.value?.bibliography?.links.length > 0));

const isModalOpen = ref(false);

// Watch for changes in props and update selected event
watch(() => props.eventId, (newValue) => {
  selectedEventId.value = newValue;
  selectedEvent.value = events.find((event: Event) => event.id === newValue) || null;
  isModalOpen.value = false;
}, { deep: true, immediate: true });


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

.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-enter-from {
  transform: translateY(100%);
}
.slide-leave-to {
  transform: translateY(-100%);
}


/* Slide transition animation for desktop views */
@media (min-width: 768px) {
  .slide-enter-active, .slide-leave-active {
    transition: transform 0.5s ease-in-out;
  }
  .slide-enter-from {
    transform: translateX(100%);
  }
  .slide-leave-to {
    transform: translateX(-100%);
  }
}
</style>
