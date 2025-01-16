<template>
  <div class="h-full flex items-center w-full relative">
  <div class="flex w-full flex-col max-h-75 overflow-auto  justify-center items-center hide-scrollbar fade-out shadows-into-light-two-regular">
    <ul class="flex flex-col max-w-max max-h-75">
      <li v-for="yearAndID in yearsWithId" :key="yearAndID.id" @click="changePath(yearAndID.id)" class="cursor-pointer mb-2 text-right" :class="{ 'text-xl selected': yearAndID.id === eventId }">
        {{ yearAndID.year }}
      </li>
    </ul>
  </div>
</div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import years from '../data/years'; // Importa los años desde el archivo years.ts
import { useRouter } from 'vue-router';

const router = useRouter(); // Importa el router de vue-router

const props = defineProps<{ eventId: number }>();
const yearsWithId = ref(years);
const yearItems = ref<HTMLElement[]>([]);

const changePath = (id: number) => {
  router.push({ name: `event-${id}` });
};

const scrollToSelected = () => {
  const selectedItem = yearItems.value.find(item => item.classList.contains('selected'));
  if (selectedItem) {
    selectedItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

onMounted(() => {
  scrollToSelected();
});

watch(() => props.eventId, () => {
  scrollToSelected();
});
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
    height: 250px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(248 247 241));
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
