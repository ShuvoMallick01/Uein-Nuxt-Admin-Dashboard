<script setup lang="ts">
// ==========================
interface ChildNavItem {
  label: string;
  route: string;
}

interface NavItem {
  label: string;
  route: string;
  icon: string;
  children?: ChildNavItem[];
}
// ==========================

const route = useRoute();
defineProps<{ item: NavItem }>();

// const iconFun = (icon) => {
//   return resolveComponent("IconDiamondPercent");
// };
</script>

<template>
  <li
    :key="item.label"
    class="transition-all duration-300 ease-in-out border-l-2 cursor-pointer text-muted group border-l-transparent hover:font-medium hover:bg-primary-light hover:border-l-primary hover:text-primary hover:bg-hover"
    :class="{
      'bg-hover !border-l-primary text-primary bg-primary-light':
        route.path === item.route,
    }"
  >
    <NuxtLink
      :to="item.route"
      class="flex p-4 text-[13px] font-medium truncate items-center gap-3"
    >
      <!-- <component
        :is="item.icon ? iconFun(item.icon) : ''"
        :size="22"
        :stroke-width="1.2"
      /> -->

      {{ item.label }}</NuxtLink
    >
  </li>
</template>
