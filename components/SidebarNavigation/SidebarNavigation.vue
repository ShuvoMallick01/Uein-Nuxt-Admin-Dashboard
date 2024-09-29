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
        class="space-y-3"
        v-for="navGroup in navigation"
        :key="navGroup.name"
      >
        <h4 class="px-4 text-sm font-medium text-primary uppercase">
          {{ navGroup.name }}
        </h4>

        <ul class="">
          <li
            v-for="menu in navGroup.menu"
            :key="menu.label"
            class="transition-all duration-300 ease-in-out border-l-2 cursor-pointer text-muted group border-l-transparent hover:font-medium hover:border-l-primary hover:text-primary hover:bg-hover"
          >
            <NuxtLink
              :to="menu.route"
              class="flex p-4 text-[13px] font-medium truncate items-center gap-3"
            >
              <!-- <Icon :size="22" :name="item.icon" :strokeWidth="1.2" /> -->
              {{ menu.label }}</NuxtLink
            >
          </li>
        </ul>
      </div>
    </nav>
  </Scrollbar>
</template>
