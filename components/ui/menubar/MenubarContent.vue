<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
  MenubarContent,
  type MenubarContentProps,
  MenubarPortal,
  useForwardProps,
} from "radix-vue";
import { cn } from "~/utils/utils";

const props = withDefaults(
  defineProps<MenubarContentProps & { class?: HTMLAttributes["class"] }>(),
  { align: "start", alignOffset: -4, sideOffset: 8 }
);

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <MenubarPortal>
    <MenubarContent
      v-bind="forwardedProps"
      :class="
        cn(
          'z-50 min-w-32 overflow-hidden rounded-lg py-1.5 border border-border bg-card text-card-foreground shadow-sm data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          props.class
        )
      "
    >
      <slot />
    </MenubarContent>
  </MenubarPortal>
</template>
