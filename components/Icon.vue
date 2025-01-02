<script setup lang="ts">
import { computed, type FunctionalComponent } from "vue";
import * as icons from "lucide-vue-next";

// ===========================
type KeyOfIcons = keyof typeof icons;
interface IconProps {
  name: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
  defaultClass?: string;
}
// ===========================

const props = defineProps<IconProps>();

const icon = computed(() => icons[props.name as KeyOfIcons]);

// console.log(icon);
</script>

<template>
  <component
    :is="icon"
    :size="size"
    :color="color"
    :stroke-width="strokeWidth"
    :default-class="defaultClass"
  />
</template>
