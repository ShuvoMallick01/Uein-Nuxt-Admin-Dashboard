<script setup lang="ts">
import { useRoute } from "vue-router";
// TYPES
import type { Product } from "~/types/Product";

const route = useRoute();

definePageMeta({
  title: "Products Edit",
});

const {
  data: product,
  status,
  error,
} = useFetch<Product>(`/api/products/${route.params.productId}`);

console.log(product.value);

// Handle errors
if (error.value) {
  console.error("Error fetching user:", error.value);
}
</script>

<template>
  <div class="grid grid-cols-12 mb-8">
    <div
      class="col-span-full xl:col-span-10 xl:col-start-2 2xl:col-span-8 2xl:col-start-3"
    >
      <CustomBreadcrumb
        heading="Edit Product"
        :links="[
          { name: 'Home', href: '/' },
          { name: 'Products', href: '/products' },
          { name: product?.title || '', current: true },
        ]"
      />

      <!-- SHOW LOADING SKELETON -->
      <ProductFormSkeleton v-if="status === 'pending'" />

      <!-- PRODUCT FORM WITH DATA -->
      <ProductForm v-if="status !== 'pending' && product" :product="product" />
    </div>
  </div>
</template>
