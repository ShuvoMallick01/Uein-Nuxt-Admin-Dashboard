<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

// TYPES
import type { Product } from "@/types/Product";

const route = useRoute();

const {
  data: product,
  status,
  error,
} = await useAsyncData<Product>(
  "user",
  () => $fetch(`/api/products/${route.params.productId}`),
  {
    lazy: false,
    server: true,
  }
);

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
