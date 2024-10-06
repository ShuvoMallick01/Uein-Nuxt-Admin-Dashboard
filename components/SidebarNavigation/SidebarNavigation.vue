<script setup>
import Scrollbar from "simplebar-vue";
import { navigation } from "~/data/navigation";
</script>

<template>
  <div class="px-4 py-5 mb-2">
    <NuxtLink to="/">
      <img
        src="/logos/uein-dark-version.svg"
        class="w-20 cursor-pointer"
        alt="Uein Admin & Client Dashboard"
      />
    </NuxtLink>
  </div>

  <Scrollbar class="h-[calc(100vh-75px)]">
    <nav class="space-y-6">
      <div
        v-for="navGroup in navigation"
        :key="navGroup.name"
        class="space-y-3"
      >
        <h4 class="px-4 text-sm font-medium text-primary uppercase">
          {{ navGroup.name }}
        </h4>

        <ul>
          <NavItem
            v-for="(menuItem, index) in navGroup.menu"
            :key="index"
            :item="menuItem"
          />
          <i class="px-4 py-6 font-semibold not-italic">
            <NuxtLink to="/products">Product</NuxtLink></i
          >
        </ul>
      </div>
    </nav>
  </Scrollbar>
</template>
