<script setup lang="ts">
definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    return typeof route.params.id === "string" && /^\d+$/.test(route.params.id);
  },
});
</script>

<template>
  <div class="space-y-4 py-5">
    <h5>Products Details</h5>
    <p class="font-semibold text-xl">Product ID: {{ $route.params.id }}</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, commodi
      cum fuga maiores omnis est sed, iusto nobis ratione minima vitae nihil
      facilis, alias inventore! Pariatur natus optio at alias?
    </p>
  </div>
</template>
