<script setup lang="ts">
import Scrollbar from "simplebar-vue";
// CUSTOM COMPONENT
import NavAccordion from "./NavAccordion.vue";
// MENU LIST
import { navigation } from "~/data/navigation";
</script>

<template>
  <div class="h-20 px-5 py-6">
    <RouterLink to="/" class="inline-flex">
      <img
        src="/logos/uno.svg"
        class="w-8"
        alt="Uno Admin & Client Dashboard"
      />
    </RouterLink>
  </div>

  <Scrollbar class="h-[calc(100vh-80px)]">
    <nav class="px-4 pb-4 space-y-4">
      <div v-for="navGroup in navigation" :key="navGroup.id">
        <h4
          v-if="navGroup.name"
          class="pb-4 text-xs font-medium uppercase text-muted ps-3"
        >
          {{ navGroup.name }}
        </h4>

        <NavAccordion
          v-for="(menuItem, index) in navGroup.menu"
          :item="menuItem"
          :key="index"
        />
      </div>
    </nav>
  </Scrollbar>
</template>
