<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { PaginationNext, type PaginationNextProps } from "radix-vue";
import { ChevronRight } from "lucide-vue-next";
import { Button } from "~/components/ui/button";
import { cn } from "~/utils/utils";

const props = withDefaults(
  defineProps<PaginationNextProps & { class?: HTMLAttributes["class"] }>(),
  { asChild: true }
);

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <PaginationNext v-bind="delegatedProps">
    <Button :class="cn('w-8 h-8 p-0', props.class)" variant="outline">
      <slot>
        <ChevronRight class="w-4 h-4" />
      </slot>
    </Button>
  </PaginationNext>
</template>
