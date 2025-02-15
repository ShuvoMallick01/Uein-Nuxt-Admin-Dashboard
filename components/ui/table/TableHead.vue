<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "~/utils/utils";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <th
    :class="
      cn(
        'py-6 px-4 text-sm font-medium xl:px-5 text-left align-middle ltr:[&:has([role=checkbox])]:pr-0 [&:last-child]:text-center rtl:text-right',
        props.class
      )
    "
  >
    <slot />
  </th>
</template>
