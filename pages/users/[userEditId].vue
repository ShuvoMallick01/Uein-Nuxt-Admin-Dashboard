<script setup lang="ts">
// TYPES
import type { User } from "~/types/User";

const route = useRoute();

definePageMeta({
  title: "Users",
});

const {
  data: user,
  status,
  error,
} = await useAsyncData<User>(
  "user",
  () => $fetch(`/api/users/${route.params.userEditId}`),
  {
    lazy: false,
    server: true,
  }
);

console.log(user.value);

// Handle errors
if (error.value) {
  console.error("Error fetching user:", error.value);
}
</script>

<template>
  <div>
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
  </div>
</template>
