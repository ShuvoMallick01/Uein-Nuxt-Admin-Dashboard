<script setup lang="ts">
import { RouterLink } from "vue-router";
// DATA LIST
const supportNavigation = [
  { label: "Overview", route: "/support" },
  { label: "Tickets", route: "/support/tickets" },
  { label: "FAQs", route: "/support/faqs" },
  { label: "Contact", route: "/support/contact" },
];

const route = useRoute();
</script>

<template>
  <div
    class="flex flex-col items-center justify-center gap-4 p-4 rounded-lg bg-active md:flex-row md:justify-between"
  >
    <div
      class="flex flex-col flex-wrap items-center justify-center gap-1 sm:flex-row md:justify-start"
    >
      <RouterLink
        v-for="nav in supportNavigation"
        :to="nav.route"
        class="inline-block px-4 py-2 text-xs font-medium tracking-wider text-gray-600 uppercase rounded-lg"
        :class="{
          'bg-primary-100 text-primary dark:bg-primary/10':
            nav.route === route.path,
        }"
      >
        {{ nav.label }}
      </RouterLink>
    </div>

    <Button :as="RouterLink" to="/support/create-ticket" class="sm:w-auto">
      Create Ticket
    </Button>
  </div>
</template>
