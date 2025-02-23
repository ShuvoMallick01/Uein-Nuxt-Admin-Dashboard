<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
  AccordionHeader,
  AccordionTrigger,
  type AccordionTriggerProps,
} from "radix-vue";

import { cn } from "~/utils/utils";

const props = defineProps<
  AccordionTriggerProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      v-bind="delegatedProps"
      :class="
        cn(
          'flex flex-1 items-center justify-between p-4 text-sm rounded-lg font-semibold truncate transition-all hover:bg-hover hover:text-primary focus-within:bg-hover focus-within:text-primary [&[data-state=open]>svg]:rotate-180 dark:hover:bg-primary/10 dark:focus-within:bg-primary/10'
        )
      "
    >
      <slot />

      <slot name="icon">
        <Icon
          name="lucide:chevron-down"
          class="w-4 h-4 transition-transform duration-200 shrink-0 text-primary"
        />
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>
