<template>
  <router-view v-slot="{ Component }">
      <component :is="Component" />
  </router-view>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, nextTick } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const isNavigating = ref(false);

const getEventIdFromRoute = (routeName: string): number | null => {
  const match = routeName.match(/event-(\d+)/);
  return match ? parseInt(match[1], 10) : null;
};

const navigateToEvent = async (direction: 'next' | 'prev') => {
  const currentEventId = getEventIdFromRoute(route.name as string);
  if (currentEventId === null || isNavigating.value) return;

  const targetEventId = direction === 'next' ? currentEventId + 1 : currentEventId - 1;
  console.log(targetEventId)
  const targetRoute = router.getRoutes().find(r => r.name === `event-${targetEventId}`);
  console.log(targetRoute)
  if (targetRoute) {
    isNavigating.value = true;
    await router.push({ name: `event-${targetEventId}` });
    await nextTick();
    setTimeout(() => {
      isNavigating.value = false;
    }, 1500); // Match the transition duration
  }
};

const handleWheel = (event: WheelEvent) => {
  // console.log(event.deltaY);
  if (event.deltaY > 0) navigateToEvent('next');
  else if (event.deltaY < 0) navigateToEvent('prev');
};

const handleTouch = {
  startY: 0,
  endY: 0,
  onTouchStart: (event: TouchEvent) => {
    console.log(event.touches[0].clientY)
    handleTouch.startY = event.touches[0].clientY;
  },
  onTouchEnd: (event: TouchEvent) => {
    handleTouch.endY = event.changedTouches[0].clientY;
    const distance = handleTouch.startY - handleTouch.endY;
    console.log(distance)
    if (distance > 200) navigateToEvent('next'); // Swipe up
    else if (distance < -50) navigateToEvent('prev'); // Swipe down
  },
};

onMounted(() => {
  window.addEventListener('wheel', handleWheel);
  window.addEventListener('touchstart', handleTouch.onTouchStart);
  window.addEventListener('touchend', handleTouch.onTouchEnd);
});

onUnmounted(() => {
  window.removeEventListener('wheel', handleWheel);
  window.removeEventListener('touchstart', handleTouch.onTouchStart);
  window.removeEventListener('touchend', handleTouch.onTouchEnd);
});
</script>
