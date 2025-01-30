<template>
  <div class="h-full flex items-center w-full relative">
  <div class="flex w-full flex-col max-h-75 overflow-auto  justify-center items-center hide-scrollbar fade-out shadows-into-light-two-regular" ref="scrollContainer">
    <ul class="flex flex-col max-w-max max-h-75">
      <li 
        v-for="yearAndID in yearsWithId" 
        :key="yearAndID.id" 
        @click="selectEvent(yearAndID.id)" 
        class="cursor-pointer mb-2 text-right last:pb-64" 
        :class="{ 'text-xl selected': yearAndID.id === selectedYearID }" 
        ref="yearItems"
      >
        {{ yearAndID.year }}
      </li>
    </ul>
  </div>
</div>
</template>

<script setup lang="ts">
import { nextTick, ref, watch, onMounted } from 'vue';
import years from '../data/years'; // Importa los años desde el archivo years.ts
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{ eventId: number }>();
const emit = defineEmits(['event-selected']);


const selectEvent = (eventId: number) => {
  scrollToSelectedYear();
  emit('event-selected', eventId);
};

const yearsWithId = ref(years);
const selectedYearID = ref<number | null>(props.eventId);

const yearItems = ref<HTMLElement[]>([]);
const scrollContainer = ref<HTMLElement | null>(null);

const scrollToSelectedYear = () => {
  nextTick(() => {
    if (!scrollContainer.value) return;

    const selectedYearItem = yearItems.value.find(item => item?.classList.contains('selected'));
   
    if (selectedYearItem) {
      scrollContainer.value.scrollTo({
        top: selectedYearItem.offsetTop - (scrollContainer.value.offsetTop + 40), // Adjust for correct alignment
        behavior: 'smooth'
      });
    }
  });
};

// Scroll on event change
watch(() => props.eventId, (newValue) => {
  if (newValue) {
    selectedYearID.value = newValue;
    scrollToSelectedYear() 
  }
})

// Make sure the timeline scrolls correctly on mount
onMounted(() => {
  scrollToSelectedYear();
})

</script>

<style scoped>
.max-h-75 {
  max-height: 73vh;
}
.hide-scrollbar {
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;  /* Safari and Chrome */
}

.fade-out::after {
  content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 390px;
    background: linear-gradient(0deg, rgba(248, 247, 240, 1) 0%, rgb(248 247 240) 35%, rgba(248, 247, 240, 0) 100%);
}


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
