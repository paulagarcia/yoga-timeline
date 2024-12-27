<template>
  <div class="flex flex-col h-full justify-center pr-6 shadows-into-light-two-regular">
    <ul class="flex flex-col items-end justify-center mr-6 pr-3">
      <li v-for="yearAndID in yearsWithId" :key="yearAndID.id" @click="emitSelectedEventId(yearAndID.id)" class="cursor-pointer mb-2" :class="{ 'text-xl selected': yearAndID.id === selectedEventId }">
        {{ yearAndID.year }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import years from '@/data/years'; // Importa los años desde el archivo years.ts

const emit = defineEmits(['selectedEventId']);

const yearsWithId = ref(years);
const selectedEventId = ref<number>(1);

const emitSelectedEventId = (id: number) => {
  selectedEventId.value = id;
  emit('selectedEventId', id);
};

onMounted(() => {
  emit('selectedEventId', selectedEventId.value);
});
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
