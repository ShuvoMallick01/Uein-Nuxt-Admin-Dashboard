<script setup lang="ts">
// DATA LIST
import { faqs } from "~/data/support/faqs";
import { tickets } from "~/data/support/tickets";

definePageMeta({
  layout: "support-layout",
});

// STATE
const defaultValue = "item-1";
</script>

<template>
  <div class="grid grid-cols-12 gap-7 my-7">
    <Card class="self-start p-6 col-span-full xl:col-span-6">
      <CardTitle class="mb-6">FAQs</CardTitle>
      <AccordionWidget :list="faqs" :defaultValue="defaultValue" />
    </Card>

    <Card class="self-start p-6 col-span-full xl:col-span-6">
      <CardTitle class="mb-6">Support Tickets</CardTitle>
      <AccordionWidget :list="tickets" :defaultValue="defaultValue" />
    </Card>
  </div>
</template>
