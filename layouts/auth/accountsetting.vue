<script setup></script>

<template>
  <!-- SIDEBAR NAVIGATION SECTION FOR DESKTOP DEVICE -->
  <NuxtLayout name="default">
    <aside
      class="bg-white h-screen fixed left-80 top-20 w-[260px] 2xl:w-[280px] z-[1111] hidden lg:block dark:bg-background"
    >
      <SidebarNavigation />
    </aside>

    <main class="h-full lg:ml-[260px] 2xl:ml-[280px]">
      <!-- PAGE / ROUTE VIEW -->
      <div class="px-4 mx-auto max-w-screen-2xl sm:px-7 2xl:px-20">
        <slot />
      </div>
    </main>
  </NuxtLayout>
</template>
