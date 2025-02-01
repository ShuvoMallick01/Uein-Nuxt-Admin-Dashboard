<script setup lang="ts">
import type { NuxtError } from "#app";
import { useRouter } from "vue-router";

const props = defineProps<{ error: NuxtError }>();
const router = useRouter();

// Handle error reset and redirect to home
const handleError = () => {
  clearError(); // Clears the error state
  router.push("/"); // Redirects to home page
};
</script>

<template>
  <div class="h-screen w-full flex flex-col justify-center items-center">
    <div class="text-center p-28 bg-gray-100 shadow-md rounded-xl space-y-5">
      <h1 class="font-bold text-error text-8xl">{{ error.statusCode }}</h1>
      <p class="text-lg text-gray-600">
        {{ error.message || "Something went wrong!" }}
      </p>
      <Button @click="handleError"> Go Back Home </Button>
    </div>
  </div>
</template>
