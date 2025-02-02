<script setup lang="ts">
import { Card, CardTitle } from "@/components/ui/card";

// ==============================================================
type Props = { title: string; description: string };
// ==============================================================

defineProps<Props>();
</script>

<template>
  <Card
    class="p-5 text-center col-span-full sm:col-span-6 lg:col-span-4 2xl:col-span-2"
  >
    <CardTitle class="mb-1 text-sm font-semibold">{{ title }}</CardTitle>
    <p class="text-xs uppercase text-muted">{{ description }}</p>
  </Card>
</template>
