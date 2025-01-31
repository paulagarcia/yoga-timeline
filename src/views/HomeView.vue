<template>
  <div class="page-wrapper relative md:max-h-screen md:h-screen flex-col md:flex-row" >

    <!-- Mobile timeline -->
    <div class="md:hidden sticky top-0 h-12 w-full z-20">
      <MobileTimeLine :eventId="selectedEventId ?? 0"  @mobile-event-selected="handleEventSelectedOnMobile" @mobile-biblio-selected="handleMobileBiblio" />
    </div>
    
    <!-- Timeline stays fixed -->
    <div class="md:w-1/12 hidden md:block">
      <TimeLine :eventId="selectedEventId ?? 0" :id="eventId"  @event-selected="handleEventSelected"  />
    </div>

    <!-- Content section with animation -->
    <div class="w-full md:w-11/12 p-4 md:p-0 relative md:overflow-hidden md:mt-0" ref="contentContainer">
      <template v-if="isMobile">
        <ContentGenerator v-for="event in events" :key="event.id" :eventId="event.id" :id="`event-${event.id}`" :isMobile="true"/>
      </template>
      <template v-else>
      <transition name="slide" mode="out-in">
        <ContentGenerator 
          v-if="selectedEventId" 
          :eventId="selectedEventId" 
          :key="selectedEventId" 
        />
      </transition>
    </template>
    </div>
    
    <!-- Bibliography book icon -->
    <div v-if="hasBibliography && !isMobile" class="fixed book-container cursor-pointer" @click="isModalOpen = true">
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
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue';
import ContentGenerator from '../components/ContentGenerator.vue';
import TimeLine from '../components/TimeLine.vue';
import BibliographyModal from '../components/BibliographyModal.vue';
import MobileTimeLine from '../components/MobileTimeLine.vue';
import events from '../data/events.json';
import { Event } from '../types/Events';
import { useRouter } from 'vue-router';

const isMobile = ref(window.innerWidth < 768);

const props = defineProps<{ eventId: number }>();

const router = useRouter();
const isNavigating = ref(false);
const contentContainer = ref<HTMLElement | null>(null);

// Event management
const selectedEventId = ref<number>(props.eventId);
const selectedEvent = ref<Event | null>(events.find((event: Event) => event.id === selectedEventId.value) || null);
const hasBibliography = computed(() => selectedEvent.value && (selectedEvent.value.bibliography?.books.length > 0 || selectedEvent.value?.bibliography?.links.length > 0));

const isModalOpen = ref(false);

// Mobile Event selection
const handleEventSelectedOnMobile = (eventId: number) => {
  console.log('Mobile event selected', eventId);
  selectedEventId.value = eventId;
  const element = document.getElementById(`event-${eventId}`);
  if (element) {
    element.scrollIntoView({  behavior: 'smooth', block: 'start' });
  }
}


// Watch for changes in props and update selected event
watch(() => props.eventId, (newValue) => {
  selectedEventId.value = newValue;
  selectedEvent.value = events.find((event: Event) => event.id === newValue) || null;
  isModalOpen.value = false;
}, { deep: true, immediate: true });


// change url - Desktop view
const changePath = (id: number) => {
  router.push({ name: `event-${id}` });
};

// Handle event selection from time line
const handleEventSelected = (eventId: number) => {
  selectedEventId.value = eventId;
  changePath(eventId);
  
};

const navigateToEvent = async (direction: 'next' | 'prev') => {
  if (selectedEventId.value === null || isNavigating.value) return;

  const targetEventId = direction === 'next' ? selectedEventId.value + 1 : selectedEventId.value - 1;
  const targetRoute = router.getRoutes().find(r => r.name === `event-${targetEventId}`);
 
  if (targetRoute) {
    isNavigating.value = true;
    await router.push({ name: `event-${targetEventId}` });
    await nextTick();
    setTimeout(() => {
      isNavigating.value = false;
    }, 1500); // Longer than transition duration to avoid skipping pages
  }
};

const handleWheel = (event: WheelEvent) => {
  if (event.deltaY > 0) navigateToEvent('next');
  else if (event.deltaY < 0) navigateToEvent('prev');
};



// Observer fot the mobile event selection
// IntersectionObserver for mobile view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const eventId = parseInt(entry.target.id.replace('event-', ''), 10);
      selectedEventId.value = eventId;
      selectedEvent.value = events.find((event: Event) => event.id === selectedEventId.value) || null;
    }
  });
}, { threshold: 0.2 });


const handleMobileBiblio = () => {
  isModalOpen.value = true;
};


onMounted(() => {
  if (!contentContainer.value) return;
  contentContainer.value.addEventListener('wheel', handleWheel);
  // Observe events for mobile view
  if (isMobile.value) {
    events.forEach(event => {
      const element = document.getElementById(`event-${event.id}`);
      if (element) {
        observer.observe(element);
      }
    });
  }
 
});

onUnmounted(() => {
  if (!contentContainer.value) return;
  contentContainer.value.removeEventListener('wheel', handleWheel);
  // Disconnect observer
  observer.disconnect();
 
});

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
/* 
.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-enter-from {
  transform: translateY(100%);
}
.slide-leave-to {
  transform: translateY(-100%);
} */


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
