<template>
    <div class="column pr-4">
        <h2 >{{ event.year }}</h2>
        <h1 class="leading-snug mb-8">{{ event.title }}</h1>
        <p class="" v-html="event.text1.content"></p>
    </div>
</template>

<script setup lang="ts">
import { Event } from '@/types/Event';
import { defineProps } from 'vue';

defineProps<{
  event: Event
}>();

</script>
