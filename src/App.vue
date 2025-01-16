<template>
  <router-view />
</template>


<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const getEventIdFromRoute = (routeName: string): number | null => {
  const match = routeName.match(/event-(\d+)/);
  return match ? parseInt(match[1], 10) : null;
};

const handleWheel = (event: WheelEvent) => {
  const currentEventId = getEventIdFromRoute(route.name as string);
  if (currentEventId === null) return;

  const delay = 500; // Delay in milliseconds

  if (event.deltaY > 0) {
    // User scrolled down, navigate to the next page
    const nextEventId = currentEventId + 1;
    const nextRoute = router.getRoutes().find(r => r.name === `event-${nextEventId}`);
    if (nextRoute) {
      setTimeout(() => {
        router.push({ name: `event-${nextEventId}` });
      }, delay);
    }
  } else if (event.deltaY < 0) {
    // User scrolled up, navigate to the previous page
    const prevEventId = currentEventId - 1;
    const prevRoute = router.getRoutes().find(r => r.name === `event-${prevEventId}`);
    if (prevRoute) {
      setTimeout(() => {
        router.push({ name: `event-${prevEventId}` });
      }, delay);
    }
  }
};
onMounted(() => {
  window.addEventListener('wheel', handleWheel);
});

onUnmounted(() => {
  window.removeEventListener('wheel', handleWheel);
});
</script>