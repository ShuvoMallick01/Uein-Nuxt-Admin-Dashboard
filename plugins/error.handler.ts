export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("vue:error", (error, instance, info) => {
    console.error("Global Error:", error, "Info:", info);
  });
});
