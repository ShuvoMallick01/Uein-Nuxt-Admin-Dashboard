<script setup lang="ts">
import {
  DropdownMenuTrigger,
  type DropdownMenuTriggerProps,
  useForwardProps,
} from "radix-vue";
import type { HTMLAttributes } from "vue";
import { ButtonVariants, buttonVariants } from ".";
import { cn } from "@/lib/utils";

interface Props extends DropdownMenuTriggerProps {
  variant?: ButtonVariants["variant"];
  color?: ButtonVariants["color"];
  shape?: ButtonVariants["shape"];
  class?: HTMLAttributes["class"];
}

// const props = defineProps<DropdownMenuTriggerProps>();
const props = defineProps<Props>();
const forwardedProps = useForwardProps(props);
</script>

<template>
  <DropdownMenuTrigger
    class=""
    v-bind="forwardedProps"
    :class="cn(buttonVariants({ variant, color, shape }), props.class)"
  >
    <slot />
  </DropdownMenuTrigger>
</template>
