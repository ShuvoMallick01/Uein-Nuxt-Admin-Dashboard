<script setup lang="ts">
// const data = await useFetch("/api/users");
// console.log(data.value);

// const { data, pending, error } = await useFetch("/api/hello");
// const { data, error, status } = await useAsyncData("users", () =>
//   $fetch("/api/users")
// );

const { data } = useCustomFetch("users", "/api/users");
console.log(data.value);
// console.log(data?.value);
// console.log(status);
</script>

<template>
  <h3>Server</h3>
</template>
