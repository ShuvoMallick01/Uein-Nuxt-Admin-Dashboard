import { ref, onMounted, onUnmounted } from "vue";

import { defineStore } from "pinia";

export const useSidebarStore = defineStore("sidebar", () => {
  const { width } = useWindowSize();
  const isSidebarOpen = ref(false);

  const handleSidebarToggle = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
  };

  const handleCloseSidebar = () => {
    isSidebarOpen.value = false;
  };

  const handleResize = () => {
    if (width.value > 1023) isSidebarOpen.value = false;
  };

  onMounted(() => {
    window.addEventListener("resize", handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });

  return { isSidebarOpen, handleSidebarToggle, handleCloseSidebar };
});
