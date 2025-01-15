<script setup lang="ts">
import { Label } from "@/components/ui/label";
defineProps<{ label?: string }>();
</script>

<template>
  <div>
    <Label v-if="label" class="inline-block mb-2 text-sm font-medium">{{
      label
    }}</Label>
    <div class="rounded-lg h-11 bg-skeleton animate-pulse"></div>
  </div>
</template>
