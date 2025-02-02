<script setup lang="ts">
import { Card } from "@/components/ui/card";
</script>

<template>
  <Card
    v-for="i in 4"
    :key="i"
    class="p-5 col-span-full 2xl:col-span-3 sm:col-span-6"
  >
    <div class="flex justify-between">
      <div class="w-32 h-3 rounded-md bg-skeleton animate-pulse"></div>
      <div class="w-10 h-10 rounded-full bg-skeleton animate-pulse"></div>
    </div>

    <div class="space-y-2">
      <div class="w-32 h-3 mb-3 rounded-md bg-skeleton animate-pulse"></div>
      <div class="h-2 rounded-md w-62 bg-skeleton animate-pulse"></div>
      <div class="h-2 rounded-md w-62 bg-skeleton animate-pulse"></div>
    </div>
  </Card>
</template>
