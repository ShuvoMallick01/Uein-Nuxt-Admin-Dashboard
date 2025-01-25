<script setup lang="ts">
definePageMeta({
  title: "Users Page",
  head: {
    title: "Users Page",
    // meta: [
    //   { name: 'description', content: 'This is a custom page description' }
    // ]
  },
  alias: ["/practice/user"],
  key: "unique-key",
  layout: "default",

  layoutTransition: {
    name: "fade",
    mode: "out-in",
  },
  pageTransition: { name: "slide", mode: "in-out" },
  name: "home",
});

// console.log("Hello tere");

// import { useHead } from "@unhead/vue";

// useHead({
//   title: "My Page Title",
// });

const router = useRouter();
const route = useRoute();
// console.log(route.meta);

const navigation = ref([
  { route: "/practice/", name: "Home" },
  { route: "/practice/users", name: "Users" },
  { route: "/practice/parent", name: "Parent" },
]);

const { data, pending, error } = useFetch<any>(
  "https://jsonplaceholder.typicode.com/users"
);
</script>

<template>
  <ClientOnly>
    <div>
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

      <Button @click="navigateTo('/practice/')">Back to Home</Button>

      <h1 class="font-medium text-lg my-5">Users List</h1>

      <div v-if="data" class="grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-8">
        <Card v-for="user in data.slice(0, 4)" :key="user.id">
          <NuxtLink :to="`/practice/${user.id}`">
            <h5>{{ user.name }}</h5>
            <p>username: {{ user.username }}</p>
          </NuxtLink>
        </Card>

        <!-- <Card v-for="user in data.slice(0, 4)" :key="user.id">
          <NuxtLink :to="`/practice/users-${user.id}`">
            <h5>Dynamic Router</h5>
            <h5>{{ user.name }}</h5>
            <p>username: {{ user.username }}</p>
          </NuxtLink>
        </Card>

        <Card v-for="user in data.slice(0, 4)" :key="user.id">
          <NuxtLink :to="`/practice/${user.username}.vue`">
            <h5>Optional Router</h5>
            <h5>{{ user.name }}</h5>
            <p>username: {{ user.username }}</p>
          </NuxtLink>
        </Card> -->
      </div>
    </div>
  </ClientOnly>
</template>
