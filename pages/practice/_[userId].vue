<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const { data, pending, error } = useFetch<any>(
  `https://jsonplaceholder.typicode.com/users/${route.params.userId}`
);
</script>
<template>
  <ClientOnly>
    <div>
      <NuxtLink to="/practice/users"><Button>Back to Users</Button></NuxtLink>

      <div class="space-y-5 mt-5">
        <h3>User ID: {{ route.params.userId }}</h3>

        <div>
          <ul>
            <li>{{ data.name }}</li>
            <li>{{ data.email }}</li>
            <li>{{ data.address }}</li>
            <li>{{ data.phone }}</li>
          </ul>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
