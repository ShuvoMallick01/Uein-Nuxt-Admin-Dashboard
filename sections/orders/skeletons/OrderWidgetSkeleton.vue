<script setup lang="ts"></script>

<template>
  <Card
    v-for="i in 6"
    :key="i"
    class="p-5 col-span-full 2xl:col-span-2 lg:col-span-4 sm:col-span-6"
  >
    <div
      class="w-32 h-3 mx-auto mb-3 rounded-md bg-skeleton animate-pulse"
    ></div>
    <p class="w-16 h-2 mx-auto rounded-md bg-skeleton animate-pulse"></p>
  </Card>
</template>
