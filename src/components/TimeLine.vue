<template>
  <div class="flex flex-col h-full justify-center items-center shadows-into-light-two-regular">
    <ul class="flex flex-col items-end justify-center max-w-max">
      <li v-for="yearAndID in yearsWithId" :key="yearAndID.id" @click="changePath(yearAndID.id)" class="cursor-pointer mb-2 text-right" :class="{ 'text-xl selected': yearAndID.id === eventId }">
        {{ yearAndID.year }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import years from '../data/years'; // Importa los años desde el archivo years.ts
import { useRouter } from 'vue-router';

const router = useRouter(); // Importa el router de vue-router

defineProps<{ eventId: number }>();
const yearsWithId = ref(years);


const changePath = (id: number) => {
  router.push({ name: `event-${id}`})
};

</script>

<style scoped>

.selected {
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--force-blue);
    margin-top: 4px;
  }
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--force-blue);
    margin-bottom: 4px;
  }
}
</style>
