<script setup>
import Scrollbar from "simplebar-vue";
// CUSTOM COMPONENT
import NavItem from "./NavItem.vue";
// MENU LIST
import { navigation } from "~/data/navigation";

let { logo } = useLogo();
</script>

<template>
  <div class="px-4 py-5 mb-2">
    <NuxtLink to="/">
      <img
        :src="logo"
        class="w-20 cursor-pointer"
        alt="Uein Admin & Client Dashboard"
      />
    </NuxtLink>
  </div>

  <Scrollbar class="h-[calc(100vh-75px)]">
    <nav class="pb-4 space-y-6">
      <div
        class="space-y-3"
        v-for="navGroup in navigation"
        :key="navGroup.name"
      >
        <h4 class="px-5 text-[12px] font-semibold text-primary uppercase">
          {{ navGroup.name }}
        </h4>

        <ul>
          <NavItem
            v-for="(menuItem, index) in navGroup.menu"
            :item="menuItem"
            :key="index"
          />
        </ul>
      </div>
    </nav>
  </Scrollbar>
</template>
