<script setup lang="ts">
import type { VariantProps } from "class-variance-authority";
import { type HTMLAttributes, computed, inject } from "vue";
import {
  ToggleGroupItem,
  type ToggleGroupItemProps,
  useForwardProps,
} from "radix-vue";
import { toggleVariants } from "~/components/ui/toggle";
import { cn } from "~/utils/utils";

type ToggleGroupVariants = VariantProps<typeof toggleVariants>;

const props = defineProps<
  ToggleGroupItemProps & {
    class?: HTMLAttributes["class"];
    variant?: ToggleGroupVariants["variant"];
    size?: ToggleGroupVariants["size"];
  }
>();

const context = inject<ToggleGroupVariants>("toggleGroup");

const delegatedProps = computed(() => {
  const { class: _, variant, size, ...delegated } = props;
  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <ToggleGroupItem
    v-bind="forwardedProps"
    :class="
      cn(
        toggleVariants({
          variant: context?.variant || variant,
          size: context?.size || size,
        }),
        'uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'hover:text-muted-foreground hover:bg-gray-100 dark:hover:bg-gray-50',
        'disabled:pointer-events-none disabled:opacity-50',
        'border border-gray-200 dark:border-gray-50',
        'data-[state=on]:bg-gray-200 data-[state=on]:text-accent-foreground',
        props.class
      )
    "
  >
    <slot />
  </ToggleGroupItem>
</template>
