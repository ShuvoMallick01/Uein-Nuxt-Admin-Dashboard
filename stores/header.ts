import { ref, onMounted, onUnmounted } from "vue";
import { defineStore } from "pinia";

export const useHeaderStore = defineStore("headerStore", () => {
  const scrollY = ref(0);

  const updateScroll = () => {
    scrollY.value = window.scrollY;
  };

  onMounted(async () => {
    await nextTick();
    scrollY.value = window.scrollY;
    window.addEventListener("scroll", updateScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", updateScroll);
  });

  return { scrollY };
});
