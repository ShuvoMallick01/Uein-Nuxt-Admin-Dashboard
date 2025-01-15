<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { Primitive, type PrimitiveProps } from "radix-vue";
import { type TabVariants, tabVariants } from ".";
import { cn } from "@/lib/utils";

interface Props extends PrimitiveProps {
  variant?: TabVariants["variant"];
  color?: TabVariants["color"];
  class?: HTMLAttributes["class"];
  tabList?: string[];
}

const props = defineProps<Props>();

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <ul
    class="inline-flex flex-wrap text-center border-b border-b-gray-200 dark:border-gray-700 gap-8"
  >
    <li v-for="item in tabList">
      <a
        href="#"
        class=""
        :class="cn(tabVariants({ variant, color }), props.class)"
        ><i :class="item.prefixIcon"></i>{{ item.title }}
      </a>
    </li>
  </ul>
</template>
