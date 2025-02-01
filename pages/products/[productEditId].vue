<script setup lang="ts">
import { watch } from "vue";
import { useRoute, useRouter } from "vue-router";
// CUSTOM COMPONENT
import ProductForm from "@/sections/products/product-form";
import { ProductFormSkeleton } from "@/sections/products/skeletons";
import CustomBreadcrumb from "@/components/CustomBreadcrumb.vue";
// CUSTOM COMPOSABLE
import { useFetch } from "@/hooks/useFetch";
// TYPES
import type { Product } from "@/types/Product";

const route = useRoute();
const router = useRouter();

const {
  error,
  isLoading,
  data: product,
} = useFetch<Product>("/api/products", {
  params: { id: +route.params.id },
});

watch(error, (hasError) => {
  if (hasError) router.push("/products");
});
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
      <ProductFormSkeleton v-if="isLoading" />

      <!-- PRODUCT FORM WITH DATA -->
      <ProductForm v-if="!isLoading && product" :product="product" />
    </div>
  </div>
</template>
