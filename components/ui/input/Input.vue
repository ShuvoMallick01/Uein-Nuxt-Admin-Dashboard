<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { useVModel } from "@vueuse/core";
import { cn } from "~/utils/utils";

const props = defineProps<{
  defaultValue?: string | number;
  modelValue?: string | number;
  class?: HTMLAttributes["class"];
  error?: boolean;
}>();

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
});
</script>

<template>
  <input
    v-model="modelValue"
    :class="
      cn(
        'flex w-full rounded-md border border-border bg-card p-3 text-sm ring-offset-background shadow-xs  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus:ring-2 focus:ring-ring focus:ring-offset-0 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        {
          'border-red-600 focus:ring-red-600 placeholder:text-red-600':
            props.error,
        },
        props.class
      )
    "
  />
</template>
