<script setup lang="ts">
import { useWindowScroll, useDark, useToggle } from "@vueuse/core";
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";
// CUSTOM UTILS METHOD
import { cn } from "~/lib/utils";

const isDark = useDark();
const toggleDark = useToggle(isDark);
const { y } = useWindowScroll({ behavior: "smooth" });
</script>

<template>
  <header
    :class="
      cn({
        'sticky top-0 z-[12] w-full py-5 transition-all  ': true,
        'backdrop-blur-lg bg-transparent shadow-sm': y > 0,
      })
    "
  >
    <div class="container px-4 mx-auto">
      <div class="flex items-center justify-between">
        <RouterLink to="/">
          <img
            src="/logos/uno.svg"
            alt="Uno Admin Dashboard"
            class="flex-shrink-0 w-8"
          />
        </RouterLink>

        <!-- THEME BUTTON -->
        <button @click="toggleDark()">
          <Icon
            height="20"
            class="text-gray-500 hover:text-primary"
            :icon="isDark ? 'solar:sun-2-outline' : 'solar:moon-outline'"
          />
        </button>
      </div>
    </div>
  </header>
</template>
