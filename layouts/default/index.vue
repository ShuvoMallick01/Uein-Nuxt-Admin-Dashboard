<script setup lang="ts">
import Header from "./header/Header.vue";
import MobileSidebar from "./MobileSidebar.vue";
import SidebarNavigation from "./sidebar/SidebarNavigation.vue";
</script>

<template>
  <div>
    <!-- SIDEBAR NAVIGATION SECTION FOR DESKTOP DEVICE -->
    <aside
      class="fixed h-screen left-0 top-0 w-[260px] 2xl:w-[280px] z-40 hidden border-e border-e-border lg:block bg-card rtl:right-0 rtl:left-auto"
    >
      <SidebarNavigation />
    </aside>

    <main
      class="h-full lg:ml-[260px] 2xl:ml-[280px] rtl:lg:mr-[260px] rtl:2xl:mr-[280px] rtl:ml-auto"
    >
      <!-- HEADER SECTION -->
      <Header></Header>

      <!-- NAVIGATION DRAWER FOR SMALL DEVICE -->
      <MobileSidebar />

      <!-- PAGE / ROUTE VIEW -->
      <div class="px-4 mx-auto max-w-screen-2xl sm:px-7 2xl:px-20">
        <slot />
      </div>
    </main>
  </div>
</template>
