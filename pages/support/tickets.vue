<script setup lang="ts">
// DATA LIST
import { tickets } from "~/data/support/tickets";

definePageMeta({
  layout: "support-layout",
  title: "Tickets",
});

// STATE
const defaultValue = "item-1";
</script>

<template>
  <Card class="p-6 my-7">
    <CardTitle class="mb-6">Tickets</CardTitle>

    <div class="grid grid-cols-12 gap-4 xl:gap-10">
      <div class="col-span-full xl:col-span-6">
        <AccordionWidget :list="tickets" :defaultValue="defaultValue" />
      </div>

      <div class="col-span-full xl:col-span-6">
        <AccordionWidget :list="tickets" :defaultValue="defaultValue" />
      </div>
    </div>
  </Card>
</template>
