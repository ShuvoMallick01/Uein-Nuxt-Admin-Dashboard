const config = useRuntimeConfig();

export const useMyComposable = () => {
  const nuxtApp = useNuxtApp(); // Example if you need Nuxt instance
  const someData = ref("some data");
  return { someData };
};
