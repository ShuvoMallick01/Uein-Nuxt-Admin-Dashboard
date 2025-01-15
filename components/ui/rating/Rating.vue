<script setup lang="ts">
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

// interface BadgeVariantProps extends VariantProps<typeof badgeVariants> {}

// interface Props {
//   variant?: BadgeVariantProps["variant"];
//   color?: BadgeVariantProps["color"];
//   size?: BadgeVariantProps["size"];
//   shape?: BadgeVariantProps["shape"];
// }

// defineProps<Props>();

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <!-- <div
    :class="
      cn(badgeVariants({ variant, color, shape, size }), $attrs.class ?? '')
    "
  >
    <slot />
  </div> -->
</template>
