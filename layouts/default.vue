<script setup>
import Header from "./header/Header.vue";
</script>

<template>
  <!-- SIDEBAR NAVIGATION SECTION FOR DESKTOP DEVICE -->
  <aside
    class="bg-white h-screen fixed left-0 top-0 w-[260px] 2xl:w-[280px] z-[1111] hidden lg:block dark:bg-background"
  >
    <SidebarNavigation />
  </aside>

  <main class="h-full lg:ml-[260px] 2xl:ml-[280px]">
    <!-- HEADER SECTION -->
    <Header></Header>

    <!-- NAVIGATION DRAWER FOR SMALL DEVICE -->
    <!-- <MobileSidebar /> -->

    <!-- PAGE / ROUTE VIEW -->
    <div class="px-4 mx-auto max-w-screen-2xl sm:px-7 2xl:px-20">
      <slot />
    </div>
  </main>
</template>
