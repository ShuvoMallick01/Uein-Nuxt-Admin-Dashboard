<script setup lang="ts">
// const users = ref(null);
const router = useRouter();

const { data, pending, error } = useFetch<any>(
  "https://jsonplaceholder.typicode.com/users"
);
</script>

<template>
  <div>
    <h1 class="font-medium text-lg mb-5">Users List</h1>

    <ClientOnly>
      <div v-if="data" class="grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-8">
        <Card v-for="user in data" :key="user.id">
          <NuxtLink :to="`/practice/${user.id}`">
            <h5>{{ user.name }}</h5>
            <p>username: {{ user.username }}</p>
          </NuxtLink>
        </Card>
      </div>
    </ClientOnly>
  </div>
</template>
