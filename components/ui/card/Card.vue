<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    :class="
      cn(
        'rounded-xl shadow-sm border bg-card border-[#F1F6F9] text-card-foreground dark:border-gray-700/30',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>
