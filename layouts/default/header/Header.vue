<script setup lang="ts">
import {
  useWindowScroll,
  useDark,
  useToggle,
  useTextDirection,
} from "@vueuse/core";
import { Icon } from "@iconify/vue";
// CUSTOM STORE
import { useSidebarStore } from "~/stores/sidebar";
// CUSTOM COMPONENTS
import SearchPopover from "./popovers/SearchPopover.vue";
import MessagePopover from "./popovers/MessagePopover.vue";
import ProfilePopover from "./popovers/ProfilePopover.vue";
import NotificationPopover from "./popovers/NotificationPopover.vue";

const isDark = useDark();
const dir = useTextDirection();
const toggleDark = useToggle(isDark);
const { y } = useWindowScroll({ behavior: "smooth" });

const { handleSidebarToggle } = useSidebarStore();
const changeDirection = () => {
  dir.value = dir.value === "rtl" ? "ltr" : "rtl";
};
</script>

<template>
  <ClientOnly>
    <header class="sticky top-0 z-[12] w-full mb-7 transition-all">
      <div class="px-4 mx-auto max-w-screen-2xl sm:px-7 2xl:px-20">
        <div
          class="flex items-center justify-between py-5 transition-shadow duration-300 ease-in-out border border-t-0 rounded-bl-xl rounded-br-xl sm:py-4 px-7 border-border bg-card"
          :class="{ 'shadow-md': y > 0 }"
        >
          <div class="flex items-center gap-4">
            <button
              class="text-gray-500 lg:hidden hover:text-primary"
              @click="handleSidebarToggle()"
            >
              <Icon icon="iconamoon:menu-burger-horizontal" height="22" />
            </button>

            <!-- SEARCH -->
            <SearchPopover />
          </div>

          <div class="flex items-center gap-5">
            <button @click="changeDirection()">
              <Icon
                v-if="dir === 'rtl'"
                icon="tabler:align-left"
                height="22"
                class="text-muted"
              />
              <Icon
                v-else
                icon="tabler:align-right"
                height="22"
                class="text-muted"
              />
            </button>

            <!-- NOTIFICATION BUTTON WITH POPOVER -->
            <NotificationPopover />

            <!-- MESSAGE BUTTON WITH POPOVER -->
            <MessagePopover />

            <!-- THEME BUTTON -->
            <button @click="toggleDark()">
              <Icon
                height="20"
                class="text-gray-500 hover:text-primary"
                :icon="isDark ? 'solar:sun-2-outline' : 'solar:moon-outline'"
              />
            </button>

            <!-- PROFILE BUTTON WITH OPTIONS -->
            <ProfilePopover />
          </div>
        </div>
      </div>
    </header>
  </ClientOnly>
</template>
