<script setup lang="ts"></script>

<template>
  <div>
    <CustomBreadcrumb
      heading="Orders"
      :links="[
        { name: 'Home', href: '/' },
        { name: 'Orders', current: true },
      ]"
    />

    <!-- ORDER HISTORY CARDS -->
    <OrderHistory />

    <!-- ORDER LIST -->
    <OrderList />
  </div>
</template>
