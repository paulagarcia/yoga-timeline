<template>
    <!-- Mobile Menu Button -->
    <div class="bg-floral border-b p-4 flex items-center justify-between">
        <p class="text-xl shadows-into-light-two-regular">La linea de tiempo del <span class="montserrat-alternates-bold uppercase color-text-secondary">yoga</span></p>
        <button @click="$emit('mobile-biblio-selected')" class="color-text-primary focus:outline-none" v-if="eventId !== 1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
        </button>
        <button @click="toggleMenu" class="color-text-primary focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
    </div>

    <!-- Backdrop -->
    <div v-if="isMenuOpen" class="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-xs" @click="toggleMenu"></div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden absolute top-0 left-0 w-full bg-floral z-50 shadows-into-light-two-regular">
        <div class="grid grid-cols-3 gap-3 py-4 border-b shadow-sm">
            <template v-for="year in yearsWithId" :key="year.id" >
                <div @click="handleSelection(year.id)" class="cursor-pointer py-2 flex items-center justify-center" :class="{'selected': year.id === eventId, 'col-span-3': year.id === 1}">
                    {{ year.year }}
                </div>
            </template>
        </div>
    </div>
 
</template>
<script setup lang="ts">
import { ref } from 'vue';
import years from '../data/years'; // Importa los años desde el archivo years.ts
import { defineProps, defineEmits } from 'vue';

defineProps<{ eventId: number }>();
const emit = defineEmits(['mobile-event-selected', 'mobile-biblio-selected']);

const yearsWithId = ref(years);

const isMenuOpen = ref(false);

const handleSelection = (selectedId: number) => {
    emit('mobile-event-selected', selectedId);
    toggleMenu();
};  

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

</script>
<style scoped>
    .selected {
        font-weight: 500;
        color: var(--yellow);
        border-top: 1px solid var(--yellow);
        border-bottom: 1px solid var(--yellow);
    }
</style>