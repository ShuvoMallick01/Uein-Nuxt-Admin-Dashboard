<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "~/utils/utils";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <div
    :class="
      cn(
        'p-5 rounded-xl border bg-card border-border text-card-foreground',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>
