<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { useVModel } from "@vueuse/core";
import { cn } from "~/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  defaultValue?: string | number;
  modelValue?: string | number;
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
  <textarea
    v-model="modelValue"
    :class="
      cn(
        'flex min-h-20 font-medium w-full rounded-md border border-border bg-card px-3 py-2 text-sm ring-offset-2 shadow-xs focus:border-ring  focus:ring-1 focus:ring-ring focus:ring-offset-0 focus:outline-none  placeholder:text-small placeholder:text-sm placeholder:text-muted  disabled:cursor-not-allowed disabled:opacity-50   dark:focus:border-ring dark:placeholder:text-muted dark:bg-card',
        props.class
      )
    "
  />
</template>
