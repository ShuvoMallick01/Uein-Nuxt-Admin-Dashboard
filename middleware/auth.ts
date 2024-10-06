function isAuthenticated(): boolean {
  return true;
}

export default defineNuxtRouteMiddleware((to, from) => {
  // if (isAuthenticated() === false) {
  //   return navigateTo("/");
  // }
  console.log(to, from);
});
