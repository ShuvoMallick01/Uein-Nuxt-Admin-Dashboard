<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
  MenubarRadioItem,
  MenubarItemIndicator,
  useForwardPropsEmits,
  type MenubarRadioItemEmits,
  type MenubarRadioItemProps,
} from "radix-vue";

import { cn } from "~/utils/utils";

const props = defineProps<
  MenubarRadioItemProps & { class?: HTMLAttributes["class"] }
>();
const emits = defineEmits<MenubarRadioItemEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <MenubarRadioItem
    v-bind="forwarded"
    :class="
      cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        props.class
      )
    "
  >
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarItemIndicator>
        <Icon name="lucide:circle" class="w-2 h-2 fill-current" />
      </MenubarItemIndicator>
    </span>
    <slot />
  </MenubarRadioItem>
</template>
