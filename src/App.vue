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

  const container = document.documentElement;
  const scrollTop = container.scrollTop;
  const scrollHeight = container.scrollHeight;
  const clientHeight = container.clientHeight;

  if (event.deltaY > 0 && scrollTop + clientHeight >= scrollHeight - 5) {
    // User scrolled down and reached the bottom, navigate to the next page
    const nextEventId = currentEventId + 1;
    const nextRoute = router.getRoutes().find(r => r.name === `event-${nextEventId}`);
    if (nextRoute) {
      window.removeEventListener('wheel', handleWheel);
      setTimeout(() => {
        router.push({ name: `event-${nextEventId}` });
        setTimeout(() => {
          window.addEventListener('wheel', handleWheel);
        }, 500); // Re-add the listener after 500ms
      }, 300); // Add a delay of 300ms before changing the route
    }
  } else if (event.deltaY < 0 && scrollTop === 0) {
    // User scrolled up and reached the top, navigate to the previous page
    const prevEventId = currentEventId - 1;
    const prevRoute = router.getRoutes().find(r => r.name === `event-${prevEventId}`);
    if (prevRoute) {
      window.removeEventListener('wheel', handleWheel);
      setTimeout(() => {
        router.push({ name: `event-${prevEventId}` });
        setTimeout(() => {
          window.addEventListener('wheel', handleWheel);
        }, 500); // Re-add the listener after 500ms
      }, 300); // Add a delay of 300ms before changing the route
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