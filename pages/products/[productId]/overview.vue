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
  "product",
  () => $fetch(`/api/products/${route.params.productId}`),
  {
    lazy: false,
  }
);

if (error) console.log(error.value);
</script>

<template>
  <CustomBreadcrumb
    heading="Product Overview"
    :links="[
      { name: 'Home', href: '/' },
      { name: 'Products', href: '/products' },
      { name: product?.title || '', current: true },
    ]"
  />

  <!-- SHOW LOADING SKELETON -->
  <ProductSkeleton v-if="status === 'pending'" />

  <!-- SHOW PRODUCT OVERVIEW -->
  <div
    v-else-if="status !== 'pending' && product"
    class="grid grid-cols-12 mb-6 gap-7"
  >
    <div class="col-span-full 2xl:col-span-4 xl:col-span-5">
      <ProductImageGallery :images="product.images" />
    </div>

    <!-- RIGHT CARD -->
    <div class="col-span-full 2xl:col-span-8 xl:col-span-7">
      <!-- PRODUCT DETAILS -->
      <Card class="space-y-6 pa-6">
        <ProductDetails :product="product" />
      </Card>

      <div class="pt-8">
        <!-- RATINGS HEADING -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-5">
          <p class="text-base font-medium underline">Ratings & Reviews</p>

          <div class="flex items-center gap-2">
            <Rating :rating="product.rating" />
            <p class="text-sm font-medium leading-6">
              ({{ product.rating }} out of 5)
            </p>
            <p class="text-xs leading-6 text-gray-500">
              {{ product.totalReviews }} total ratings
            </p>
          </div>
        </div>

        <!-- PRODUCT REVIEWS -->
        <ProductReviewList :productId="product.id" />
      </div>
    </div>
  </div>
</template>
