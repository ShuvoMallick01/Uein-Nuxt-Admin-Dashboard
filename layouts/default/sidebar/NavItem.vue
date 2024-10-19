<script setup lang="ts">
// CUSTOM COMPONENT
import NavAccordion from "./NavAccordion.vue";
// TYPE
import { type NavItem } from "./type";

const route = useRoute();
const { handleCloseSidebar } = useSidebarStore();

defineProps<{ item: NavItem }>();
</script>

<template>
  <li
    v-if="!item.children"
    @click="handleCloseSidebar()"
    :key="item.label"
    class="transition-all duration-300 ease-in-out border-l-2 cursor-pointer text-muted group border-l-transparent hover:font-medium hover:border-l-primary hover:text-primary hover:bg-hover"
    :class="{
      'bg-hover !border-l-primary text-primary': route.path === item.route,
    }"
  >
    <NuxtLink
      :to="item.route"
      class="flex p-4 text-[13px] font-medium truncate items-center gap-3"
    >
      <Icon :size="22" :name="item.icon" :strokeWidth="1.2" />

      {{ item.label }}</NuxtLink
    >
  </li>

  <li v-else>
    <NavAccordion :item="item" />
  </li>
</template>
