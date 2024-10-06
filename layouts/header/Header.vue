<script setup>
import { useWindowScroll, useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <header class="sticky top-0 z-[12] w-full py-5 transition-all shadow-sm">
    <div
      class="flex items-center justify-between px-4 mx-auto max-w-screen-2xl sm:px-7 2xl:px-20"
    >
      <button>
        <IconAlignLeft :size="22" class="text-primary" />
      </button>

      <button @click="toggleDark()">
        <IconSun :size="22" v-if="isDark" class="text-warning" />
        <IconMoon :size="22" v-else class="text-muted" />
      </button>
    </div>
  </header>
</template>
