<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <thead :class="cn('[&_tr]:border-b [&_tr]:border-border text-muted', props.class)">
    <slot></slot>
  </thead>
</template>
