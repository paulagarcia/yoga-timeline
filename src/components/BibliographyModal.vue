<template>
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black/40  backdrop-blur-sm" />
        </TransitionChild>
        <div class="fixed inset-0 overflow-y-auto ">
          <div class="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
              <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all modal-content">
                <DialogTitle as="h3" class="color-text-primary">Bibliografía y links de interes</DialogTitle>
                <div class="mt-6 mb-8 flex flex-col space-y-4">
                  <div class="flex flex-col space-y-2">
                    <h4 class="subtitle py-1 uppercase color-text-secondary">Libros</h4>
                    <ul class="">
                      <li v-for="(book, index) in bibliography.books" :key="index" class="color-text-primary py-2 "><p class="text-sm font-medium" v-html="book"></p></li>
                    </ul> 
                  </div>
                  <div class="flex flex-col space-y-2">
                    <h4 class="subtitle py-1 uppercase color-text-secondary ">LINKS</h4>
                    <ul class="">
                      <li v-for="(link, index) in bibliography.links" :key="index" class="color-text-primary py-2">
                        <a :href="link.link" target="_blank" class="text-sm underline underline-offset-4 outline-none">{{ link.description }}</a> 
                      </li>
                    </ul> 
                  </div>
                </div>
               
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>
  
<script setup lang="ts">
import { ref, watch } from 'vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
import { Bibliography } from '@/types/Events';

const props = defineProps<{ isOpen: boolean, bibliography: Bibliography }>();

const isOpen = ref(props.isOpen);

watch(() => props.isOpen, (newVal) => {
  isOpen.value = newVal;
});

const emit = defineEmits(['update:isOpen']);

const closeModal = () => {
  isOpen.value = false;
  // Emit an event to notify the parent component to update the isOpen prop
  emit('update:isOpen', false);
};

</script>
<style lang="css">
.modal-content {
    background-color: rgb(248 247 240 / 0.90);
}
.subtitle {
    border-bottom: 1px solid;
    border-top: 1px solid;
    border-color: var(--sunset);
    text-align: center;
    border-style: dashed;
}
</style>
  