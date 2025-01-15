<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <td
    :class="
      cn(
        'py-3 px-5 align-middle ltr:[&:has([role=checkbox])]:pr-0  [&:last-child]:text-center ',
        props.class
      )
    "
  >
    <slot />
  </td>
</template>
