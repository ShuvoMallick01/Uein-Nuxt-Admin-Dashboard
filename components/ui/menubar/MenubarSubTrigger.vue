<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
  MenubarSubTrigger,
  type MenubarSubTriggerProps,
  useForwardProps,
} from "radix-vue";

import { cn } from "~/utils/utils";

const props = defineProps<
  MenubarSubTriggerProps & { class?: HTMLAttributes["class"]; inset?: boolean }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <MenubarSubTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
        inset && 'pl-8',
        props.class
      )
    "
  >
    <slot />
    <Icon name="lucide:chevron-right" class="w-4 h-4 ml-auto" />
  </MenubarSubTrigger>
</template>
