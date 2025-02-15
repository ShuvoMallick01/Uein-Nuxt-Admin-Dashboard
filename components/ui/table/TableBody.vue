<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "~/utils/utils";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <tbody
    :class="
      cn(
        '[&_tr]:border-b [&_tr]:border-border [&_tr:last-child]:border-0 ',
        props.class
      )
    "
  >
    <slot />
  </tbody>
</template>
