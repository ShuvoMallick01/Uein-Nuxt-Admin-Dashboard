<script setup lang="ts">
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";

definePageMeta({
  layout: false,
});

// SHADCN COMPONENTS
import { Button } from "~/components/ui/button";
</script>

<template>
  <div class="flex items-center justify-center h-screen text-center">
    <div class="p-30 xl:w-1/3">
      <img
        src="/images/illustration/404.svg"
        alt="maintenance"
        class="w-56 mx-auto mb-10 sm:w-96 xl:mb-20"
      />

      <h4 class="mt-6 font-semibold">Ooops... 404!</h4>
      <p class="text-base text-gray-600">
        The page you requested could not be found.
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
