<template>
    <!-- Mobile Menu Button -->
    <div class="bg-floral border-b p-4 flex items-center">
      <button @click="toggleMenu" class="color-text-primary focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden absolute top-0 left-0 w-full bg-white shadow-md z-50">
      <ul class="flex flex-col p-4">
        <li v-for="year in yearsWithId" :key="year.id" @click="handleSelection(year.id)" class="cursor-pointer py-2 border-b border-gray-200">
          {{ year.year }}
        </li>
      </ul>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import years from '../data/years'; // Importa los años desde el archivo years.ts

const props = defineProps<{ eventId: number }>();
const emit = defineEmits(['mobile-event-selected']);

const yearsWithId = ref(years);
const selectedYearID = ref<number | null>(props.eventId);
const isMenuOpen = ref(false);

const handleSelection = (selectedId: number) => {
    selectedYearID.value = selectedId;
    emit('mobile-event-selected', selectedYearID.value);
    toggleMenu();
};  

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
<style scoped>
    
</style>