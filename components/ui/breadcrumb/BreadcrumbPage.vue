<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "~/utils/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <span
    role="link"
    aria-disabled="true"
    aria-current="page"
    :class="cn('font-normal', props.class)"
  >
    <slot />
  </span>
</template>
