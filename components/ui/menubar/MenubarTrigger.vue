<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
  MenubarTrigger,
  type MenubarTriggerProps,
  useForwardProps,
} from "radix-vue";
import { cn } from "~/utils/utils";

const props = defineProps<
  MenubarTriggerProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <MenubarTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'flex cursor-pointer items-center text-xs font-medium outline-none data-[state=open]:bg-primary data-[state=open]:text-white hover:bg-primary hover:text-white px-2 py-1 rounded-lg',
        props.class
      )
    "
  >
    <slot />
  </MenubarTrigger>
</template>
