<script setup lang="ts">
// CUSTOM UTILS METHOD
import { currency } from "~/utils/currency";

defineProps<{
  name: string;
  description: string;
  price: number;
  isCurrent?: boolean;
}>();
</script>

<template>
  <Card
    class="p-5 text-center duration-300 cursor-pointer"
    :class="{
      'border-primary ring-1 ring-primary': isCurrent,
      'hover:border-primary hover:ring-1 hover:ring-primary': !isCurrent,
    }"
  >
    <CardTitle class="mb-2">{{ name }}</CardTitle>
    <CardDescription class="text-sm font-normal text-gray-600">{{
      description
    }}</CardDescription>

    <CardFooter class="mt-6 text-base font-semibold">
      {{ currency(price) }}
      <span class="text-sm font-normal text-muted">/ Month</span>
    </CardFooter>
  </Card>
</template>
