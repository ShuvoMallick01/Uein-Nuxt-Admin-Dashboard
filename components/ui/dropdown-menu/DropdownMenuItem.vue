<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { DropdownMenuItem, type DropdownMenuItemProps, useForwardProps } from "radix-vue";
import { cn } from "@/lib/utils";
import { type OptionVariants, optionVariants } from ".";

interface Props extends DropdownMenuItemProps {
  variant?: OptionVariants["variant"];
  color?: OptionVariants["color"];
  as?: string;
  class?: HTMLAttributes["class"];
  inset?: boolean;
}

const props = defineProps<Props>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <DropdownMenuItem
    v-bind="forwardedProps"
    :class="
      cn(
        'flex cursor-pointer select-none items-center  px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        inset && 'pl-8',
        optionVariants({ variant, color }),
        props.class
      )
    ">
    <slot />
  </DropdownMenuItem>
</template>
