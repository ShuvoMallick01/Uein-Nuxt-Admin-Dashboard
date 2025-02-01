<script setup lang="ts"></script>

<template>
  <div class="grid grid-cols-12 mb-8">
    <div
      class="col-span-full xl:col-span-10 xl:col-start-2 2xl:col-span-8 2xl:col-start-3"
    >
      <CustomBreadcrumb
        heading="Create Products"
        :links="[
          { name: 'Home', href: '/' },
          { name: 'Products', href: '/products' },
          { name: 'Create', current: true },
        ]"
      />

      <!-- PRODUCT FORM SECTION -->
      <ProductForm />
    </div>
  </div>
</template>
