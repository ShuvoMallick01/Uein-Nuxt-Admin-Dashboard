<script setup lang="ts">
import { useRoute } from "vue-router";
// TYPES
import type { User } from "@/types/User";

const route = useRoute();

const {
  data: user,
  status,
  error,
} = await useAsyncData<User>("users", () =>
  $fetch(`/api/users/${route.params.userEditId}`)
);

console.log(user.value);

if (error.value) console.log(error.value);
</script>

<template>
  <CustomBreadcrumb
    heading="Edit User"
    :links="[
      { name: 'Home', href: '/' },
      { name: 'Users', href: '/users' },
      { name: user?.name || '', current: true },
    ]"
  />

  <!-- SHOW LOADING SKELETON -->
  <UserFormSkeleton v-if="status === 'pending'" />

  <!-- USER FORM WITH DATA -->
  <UserForm v-if="user" :user="user" />
</template>
