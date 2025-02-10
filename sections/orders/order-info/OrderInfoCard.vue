<script setup lang="ts">
import { Icon } from "@iconify/vue";
// SHADCN COMPONENTS
import type { BadgeVariants } from "~/components/ui/badge";

// ==============================================================
interface Props {
  icon: string;
  title: string;
  heading: string;
  iconColor: BadgeVariants["variant"];
}
// ==============================================================

defineProps<Props>();
</script>

<template>
  <Card class="p-5 col-span-full 2xl:col-span-3 sm:col-span-6">
    <CardHeader class="flex-row justify-between">
      <CardTitle class="text-base font-semibold">{{ heading }}</CardTitle>

      <Badge class="justify-center rounded-lg w-11 h-11" :variant="iconColor">
        <Icon :icon="icon" height="22" />
      </Badge>
    </CardHeader>

    <div>
      <h5 class="mb-2 text-sm font-medium text-gray-600">
        {{ title }}
      </h5>

      <p class="w-4/5 text-xs text-gray-600">
        <slot></slot>
      </p>
    </div>
  </Card>
</template>
