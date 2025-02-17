export default defineNuxtPlugin(() => {
  onNuxtReady(() => {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  });
});
