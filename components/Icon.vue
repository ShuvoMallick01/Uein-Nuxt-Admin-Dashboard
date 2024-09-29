<script setup lang="ts">
import { computed } from "vue";
import * as icons from "lucide-vue-next";

// ==============================================================
type KeyOfIcons = keyof typeof icons;
interface IconProps {
  name: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
  defaultClass?: string;
}
// ==============================================================

const props = defineProps<IconProps>();

const icon = computed(() => icons[props.name as KeyOfIcons]);
</script>

<template>
  <component
    :is="Icon"
    :size="size"
    :color="color"
    :stroke-width="strokeWidth"
    :default-class="defaultClass"
  />
</template>
