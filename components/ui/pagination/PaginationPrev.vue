<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { PaginationPrev, type PaginationPrevProps } from "radix-vue";
import { ChevronLeft } from "lucide-vue-next";
import { Button } from "~/components/ui/button";
import { cn } from "~/utils/utils";

const props = withDefaults(
  defineProps<PaginationPrevProps & { class?: HTMLAttributes["class"] }>(),
  { asChild: true }
);

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <PaginationPrev v-bind="delegatedProps">
    <Button :class="cn('w-8 h-8 p-0', props.class)" variant="outline">
      <slot>
        <ChevronLeft class="w-4 h-4" />
      </slot>
    </Button>
  </PaginationPrev>
</template>
