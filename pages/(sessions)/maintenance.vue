<script setup lang="ts">
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";

definePageMeta({
  layout: false,
  title: "Maintenance",
});

useHead({
  titleTemplate: `Maintenance - %s `,
});
</script>

<template>
  <div class="flex items-center justify-center h-screen text-center">
    <div class="p-30 xl:w-2/3">
      <img
        alt="maintenance"
        src="/images/illustration/maintenance-2.svg"
        class="w-64 mx-auto mb-10 sm:w-2/3 lg:w-1/2 xl:mb-20"
      />

      <h4 class="mt-6 mb-2 font-semibold">
        We are under scheduled maintenance.
      </h4>
      <p class="text-sm text-gray-600 sm:text-base">
        Sorry for the inconvenience, we will be back shortly!
      </p>

      <Button :as="RouterLink" to="/" variant="link" class="mt-8">
        <Icon
          icon="majesticons:chevron-left"
          style="font-size: large"
          class="rtl:rotate-180"
        />
        Go Back
      </Button>
    </div>
  </div>
</template>
