<template>
    <div class="column pr-8">
        <h2 >{{ event.year }}</h2>
        <h1 class="leading-snug mb-8" v-html="event.title"></h1>
        <p class="" v-html="event.text1.content"></p>
    </div>
</template>

<script setup lang="ts">
import { Event } from '../types/Events';
import { defineProps } from 'vue';

defineProps<{
  event: Event
}>();

</script>
