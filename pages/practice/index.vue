<script setup lang="ts">
definePageMeta({
  head: {
    title: "My Custom Page Title",
    // meta: [
    //   { name: 'description', content: 'This is a custom page description' }
    // ]
  },
});

const navigation = ref([
  { route: "/practice/", name: "Home" },
  { route: "/practice/users", name: "Users" },
  { route: "/practice/parent", name: "Parent" },
]);
</script>

<template>
  <div class="space-y-4">
    <div class="mb-5">
      <nav class="flex items-center gap-2">
        <NuxtLink
          v-for="(nav, index) in navigation"
          :to="nav.route"
          :key="index"
          class="py-2 px-3 rounded-lg text-base font-semibold hover:text-primary"
          :class="{ 'text-primary': $route.fullPath === nav.route }"
          >{{ nav.name }}</NuxtLink
        >
      </nav>
    </div>

    <NuxtLink to="/practice/users"><Button>Back to Users</Button></NuxtLink>
    <h1 class="font-medium text-lg mb-5">Welcome to Practice Page</h1>
  </div>
</template>
