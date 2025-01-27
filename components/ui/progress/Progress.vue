<script setup lang="ts">
import { computed, type HTMLAttributes } from "vue";
import {
  ProgressRoot,
  ProgressIndicator,
  type ProgressRootProps,
} from "radix-vue";
import { cn } from "~/lib/utils";

const colors = {
  default: { bar: "bg-primary", track: "bg-gray-50" },
  error: { bar: "bg-error", track: "bg-error-50" },
  success: { bar: "bg-success", track: "bg-success-50" },
  warning: { bar: "bg-warning", track: "bg-warning-50" },
  info: { bar: "bg-info", track: "bg-info-50" },
};

type Color = keyof typeof colors;

const props = withDefaults(
  defineProps<
    ProgressRootProps & { class?: HTMLAttributes["class"]; color?: Color }
  >(),
  { modelValue: 0, color: "default" }
);

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});
</script>

<template>
  <ProgressRoot
    v-bind="delegatedProps"
    :class="
      cn(
        'relative h-4 w-full overflow-hidden rounded-full bg-gray-100 rtl:rotate-180',
        colors[props.color].track,
        props.class
      )
    "
  >
    <ProgressIndicator
      :class="
        cn(
          'flex-1 w-full h-full transition-all duration-500 bg-primary',
          colors[props.color].bar
        )
      "
      :style="`transform: translateX(-${100 - (props.modelValue ?? 0)}%);`"
    />
  </ProgressRoot>
</template>
