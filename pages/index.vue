<script setup lang="ts">
definePageMeta({
  layout: "accountsetting",
  // middleware: "auth",
  middleware: (to, form, next) => {
    console.log(to, form);
  },
});
</script>

<template>
  <h4>Practice</h4>
  <Practice />
</template>
