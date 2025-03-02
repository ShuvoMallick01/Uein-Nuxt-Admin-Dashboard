<script setup lang="ts">
import { RouterLink } from "vue-router";
// CUSTOM UTILS METHOD
import { cn } from "~/utils/utils";
// CUSTOM STORE
import { useHeaderStore } from "~/stores/header";

const headerStore = useHeaderStore();
const colorMode = useColorMode();

// Toggle theme function
const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};

onMounted(() => {
  colorMode.preference = "light";
  headerStore.scrollY = window.scrollY;
});
</script>

<template>
  <header
    :class="
      cn({
        'sticky top-0 z-[12] w-full py-5 transition-all  ': true,
        'backdrop-blur-lg bg-transparent shadow-sm': headerStore.scrollY > 0,
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
        <button @click="toggleTheme" class="flex items-center">
          <Icon
            size="18"
            class="text-gray-500 hover:text-primary"
            :name="
              colorMode.value === 'dark'
                ? 'solar:sun-2-outline'
                : 'solar:moon-outline'
            "
          />
        </button>
      </div>
    </div>
  </header>
</template>
