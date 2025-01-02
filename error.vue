<script setup lang="ts">
// import type { NuxtError } from "#app";
defineProps(["error"]);

// const props = defineProps({
//   error: Object as () => NuxtError,
// });
</script>

<template>
  <div class="h-screen w-full flex flex-col justify-center items-center">
    <div class="text-center p-16 bg-gray-300 rounded-xl space-y-3">
      <h1 class="font-bold text-error text-9xl">{{ error.statusCode }}</h1>
      <p class="pb-10">Custom Error Page</p>
      <NuxtLink to="/" class="bg-primary text-white py-3 px-4 rounded-lg"
        >Go back home</NuxtLink
      >
    </div>
  </div>
</template>
