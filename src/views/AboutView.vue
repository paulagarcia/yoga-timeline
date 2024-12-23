<template>
  <div class="max-w-3xl mx-auto p-6 bg-gray-100">
    <h1 class="text-3xl font-bold text-center mb-8">Línea de Tiempo</h1>
    <div class="relative border-l border-gray-300">

      <!-- Iteramos sobre los eventos -->
      <div
        v-for="(event, index) in events"
        :key="index"
        class="mb-10 ml-6"
      >
        <!-- Punto del evento -->
        <div
          class="absolute w-4 h-4 rounded-full -left-2 border border-white"
          :class="event.color"
        ></div>
        <!-- Contenido del evento -->
        <div class="p-4 bg-white rounded-lg shadow-md">
          <h3 :class="`text-lg font-semibold ${event.color}`">{{ event.title }}</h3>
          <time class="block mb-2 text-sm text-gray-500">{{ event.date }}</time>
          <p class="text-gray-700">{{ event.description }}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const events = [
        {
          title: "Evento 1",
          date: "Enero 2024",
          description: "Descripción del evento 1, con detalles y contexto adicional.",
          color: "bg-blue-500 text-blue-500",
        },
        {
          title: "Evento 2",
          date: "Marzo 2024",
          description: "Descripción del evento 2, que incluye información clave sobre lo ocurrido.",
          color: "bg-green-500 text-green-500",
        },
        {
          title: "Evento 3",
          date: "Mayo 2024",
          description: "Descripción del evento 3, destacando puntos importantes.",
          color: "bg-red-500 text-red-500",
        },
      ]

</script>



<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
