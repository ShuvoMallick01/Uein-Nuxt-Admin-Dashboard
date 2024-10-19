<script setup lang="ts">
import { VisuallyHidden } from "radix-vue";
// CUSTOM COMPONENTS
import SidebarNavigation from "./sidebar/SidebarNavigation.vue";

const sidebarStore = useSidebarStore();
</script>

<template>
  <Sheet
    :open="sidebarStore.isSidebarOpen"
    @update:open="sidebarStore.handleSidebarToggle()"
  >
    <SheetContent side="left" class="p-0 outline-none border-r-0 w-[280px]">
      <VisuallyHidden>
        <SheetHeader>
          <SheetTitle>Uein</SheetTitle>
          <SheetDescription
            >Uein Admin & Client Dashboard Template</SheetDescription
          >
        </SheetHeader>
      </VisuallyHidden>

      <SidebarNavigation />
    </SheetContent>
  </Sheet>
</template>
