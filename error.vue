<script setup lang="ts">
import type { NuxtError } from "#app";
// SHADCN COMPONENTS
import { Button } from "~/components/ui/button";

defineProps<{ error: NuxtError }>();

const handleError = () => {
  clearError({ redirect: "/course" });
};

definePageMeta({
  layout: false,
  title: "Not Found",
});
</script>

<template>
  <div class="flex items-center justify-center h-screen text-center">
    <div class="p-30 xl:w-1/3">
      <img
        src="/images/illustration/404.svg"
        alt="maintenance"
        class="w-56 mx-auto mb-10 sm:w-96 xl:mb-20"
      />

      <h4 class="mt-6 font-semibold">Ooops... {{ error.statusCode }}!</h4>
      <p class="text-base text-gray-600">
        {{ error.message || "Something went wrong!" }}
      </p>

      <Button @click="handleError" variant="link" class="mt-8">
        <Icon
          name="majesticons:chevron-left"
          size="20"
          class="rtl:rotate-180"
        />
        Go Back Home
      </Button>
    </div>
  </div>
</template>
