<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { AccordionContent, type AccordionContentProps } from "radix-vue";
import { cn } from "~/utils/utils";

const props = defineProps<
  AccordionContentProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});
</script>

<template>
  <AccordionContent
    v-bind="delegatedProps"
    class="overflow-hidden text-muted font-normal text-[13px] transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down dark:text-gray-400"
  >
    <div :class="cn('pb-[18px] px-4 pt-[14px]', props.class)">
      <slot />
    </div>
  </AccordionContent>
</template>
