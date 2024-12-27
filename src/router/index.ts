import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import events from '../data/events.json';
import { Event } from '../types/Events';

// Function to generate dynamic routes based on events
const generateEventRoutes = (): RouteRecordRaw[] => {
  const eventsNoHome = events.slice(1); // Exclude the first event (home)
  return eventsNoHome.map((event: Event) => ({
    path: `/${event.year.replace(/\s+/g, '')}`,
    name: `event-${event.id}`,
    component: HomeView,
    props: () => ({ eventId: event.id })
  }));
};

// Static routes
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'event-1',
    component: HomeView,
    props: { eventId: 1 },
  },
  ...generateEventRoutes() // Add dynamic routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
console.log(router.getRoutes());
export default router;
