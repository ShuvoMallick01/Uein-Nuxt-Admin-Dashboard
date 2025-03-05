export default defineNuxtPlugin(() => {
  const router = useRouter();

  router.onError((error) => {
    if (
      error.message.includes("No match found for location with path") ||
      error.type === "route-not-found"
    ) {
      console.log(`Suppressed: ${error.message}`);
    } else {
      console.log(error);
    }
  });
});
