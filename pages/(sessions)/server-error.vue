<script setup lang="ts">
import { RouterLink } from "vue-router";

definePageMeta({
  layout: false,
  title: "Server Error",
});

useHead({
  titleTemplate: `Server Error - %s `,
});
</script>

<template>
  <div class="flex items-center justify-center h-screen text-center">
    <div class="p-30 xl:w-1/3">
      <img
        src="/images/illustration/500.svg"
        alt="maintenance"
        class="w-56 mx-auto mb-10 sm:w-2/3 xl:mb-20"
      />

      <h4 class="mt-6 mb-2 font-semibold">Something went wrong!</h4>

      <p class="text-base text-gray-600">
        Server Error 500. Our staff has been notified, <br />
        thank you for your understanding.
      </p>

      <Button :as="RouterLink" to="/" variant="link" class="mt-8">
        <Icon
          name="majesticons:chevron-left"
          size="20"
          class="rtl:rotate-180"
        />
        Go Back
      </Button>
    </div>
  </div>
</template>
