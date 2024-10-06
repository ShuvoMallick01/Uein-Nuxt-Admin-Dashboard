<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <p :class="cn('font-medium text-[12px] text-muted leading-5', props.class)">
    <slot />
  </p>
</template>
