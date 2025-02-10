<script setup lang="ts">
// CUSTOM UTILS METHODS
import { cn } from "~/lib/utils";
import { currency } from "~/lib/currency";

defineProps<{ name: string; value: number; isLast?: boolean }>();
</script>

<template>
  <TableRow
    :class="
      cn({
        '[&>td:last-of-type]:text-end': true,
        '[&>td]:font-normal [&>td]:border-b [&>td]:border-border': !isLast,
        'text-base [&>td]:font-semibold [&>td]:text-gray-800': isLast,
      })
    "
  >
    <TableCell class="py-2.5 text-gray-600">{{ name }}</TableCell>
    <TableCell class="py-2.5 font-medium">{{ currency(value) }}</TableCell>
  </TableRow>
</template>
