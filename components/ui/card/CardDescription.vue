<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "~/utils/utils";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <div :class="cn('font-medium text-sm', props.class)">
    <slot />
  </div>
</template>
