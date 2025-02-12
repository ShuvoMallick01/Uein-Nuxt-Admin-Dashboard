<script setup lang="ts"></script>

<template>
  <div>
    <CustomBreadcrumb
      heading="Create User"
      :links="[
        { name: 'Home', href: '/' },
        { name: 'Users', href: '/users' },
        { name: 'Create', current: true },
      ]"
    />

    <!-- USER FORM SECTION -->
    <UserForm />
  </div>
</template>
