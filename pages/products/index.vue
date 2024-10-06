<script setup lang="ts">
const products = ref([
  { id: 1, name: "Mac Coffee", price: 22 },
  { id: 2, name: "Bangladesh Apple", price: 60 },
  { id: 3, name: "Mango India", price: 55 },
  { id: 4, name: "Momo India", price: 40 },
]);
</script>

<template>
  <div class="grid grid-cols-12 gap-6 py-6">
    <Card v-for="(product, index) in products" :key="index" class="col-span-4">
      <CardContent class="p-4 cursor-pointer">
        <NuxtLink :to="`products/${product.id}`">
          <h5>{{ product.id }}</h5>
          <p>{{ product.name }}</p>
          <p>{{ product.price }}</p>
        </NuxtLink>
      </CardContent>
    </Card>
  </div>
</template>
