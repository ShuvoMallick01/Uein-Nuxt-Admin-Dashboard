<script setup lang="ts">
// DATA LIST
import { faqs } from "@/data/support/faqs";

definePageMeta({
  layout: "support-layout",
});

// STATE
const defaultValue = "item-1";
</script>

<template>
  <Card class="p-6 my-7">
    <CardTitle class="mb-6">FAQs</CardTitle>

    <div class="grid grid-cols-12 gap-4 xl:gap-10">
      <div class="col-span-full xl:col-span-6">
        <AccordionWidget :list="faqs" :defaultValue="defaultValue" />
      </div>

      <div class="col-span-full xl:col-span-6">
        <AccordionWidget :list="faqs" :defaultValue="defaultValue" />
      </div>
    </div>
  </Card>
</template>
