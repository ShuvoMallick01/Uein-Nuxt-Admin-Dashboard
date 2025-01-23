<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const navigation = ref([
  { route: "/practice/", name: "Home" },
  { route: "/practice/users", name: "Users" },
  { route: "/practice/parent", name: "Parent" },
  { route: "/practice/parent/child", name: "Child" },
  { route: "/practice/parent/child2", name: "Child-2" },
]);

const route = useRoute();
// const { data, pending, error } = useFetch<any>(
//   `https://jsonplaceholder.typicode.com/users/${route.params.userId}`
// );
</script>
<template>
  <div class="mb-5">
    <nav class="flex items-center gap-2 border-b">
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

  <div>
    <NuxtLink to="/practice/users"><Button>Back to Users</Button></NuxtLink>

    <div class="space-y-5 mt-5">
      <h5>Parent</h5>
      <h6>URL: {{ route.path }}</h6>
      <!-- <h5>{{ route.params.slug }}</h5> -->
      <!-- <h3>User ID: {{ route.params.userId }}</h3> -->

      <div>
        <!-- <NuxtPage :num="'123'" :page-key="(route) => route.fullPath" /> -->
        <KeepAlive>
          <NuxtPage />
        </KeepAlive>
      </div>
    </div>
  </div>
</template>
