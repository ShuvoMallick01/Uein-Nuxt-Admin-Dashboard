<script setup lang="ts">
import { watch } from "vue";
import { useRoute, useRouter } from "vue-router";
// CUSTOM COMPONENTS
// import OrderInfo from "@/sections/orders/order-info";
// import OrderStatus from "@/sections/orders/order-status";
// import OrderSummery from "@/sections/orders/order-summery";
// import OrderWidgets from "@/sections/orders/order-widgets";
// import {
//   OrderInfoSkeleton,
//   OrderStatusSkeleton,
//   OrderWidgetSkeleton,
//   OrderSummerySkeleton,
// } from "@/sections/orders/skeletons";
// CUSTOM COMPONENTS
// import CustomBreadcrumb from "@/components/CustomBreadcrumb.vue";
// CUSTOM COMPOSABLE
// import { useFetch } from "@/hooks/useFetch";
// TYPES
import type { Order } from "@/types/Order";

const route = useRoute();
const router = useRouter();

// const {
//   error,
//   isLoading,
//   data: order,
// } = useFetch<Order>("/api/orders", {
//   params: { id: +route.params.id },
// });
console.log("Testing", route.params.orderId);
const {
  status,
  error,
  data: order,
} = useAsyncData<Order[]>(
  "orders",
  () => $fetch(`/api/orders/${route.params.orderId}`),
  {
    lazy: false,
  }
);

if (error.value) console.log(error.value);

// watch(error, (hasError) => {
//   if (hasError) router.push("/orders");
// });
</script>

<template>
  <CustomBreadcrumb
    heading="Order Overview"
    :links="[
      { name: 'Home', href: '/' },
      { name: 'Orders', href: '/orders' },
      { name: order?.invoiceId || '', current: true },
    ]"
  />

  <!-- SHOW LOADING SKELETON -->
  <template v-if="status === 'pending'">
    <div class="grid grid-cols-12 mt-2 mb-6 gap-7">
      <OrderInfoSkeleton />
    </div>

    <div class="grid grid-cols-12 mb-6 gap-7">
      <OrderWidgetSkeleton />
    </div>

    <div class="grid items-start grid-cols-1 mb-6 gap-7 xl:grid-cols-2">
      <OrderSummerySkeleton />
      <OrderStatusSkeleton />
    </div>
  </template>

  <!-- SHOW PAGE WHEN DATA IS LOADED -->
  <template v-if="status !== 'pending' && order">
    <OrderInfo :order="order" />
    <OrderWidgets :order="order" />

    <div class="grid items-start grid-cols-1 mb-6 gap-7 xl:grid-cols-2">
      <OrderSummery :order="order" />
      <OrderStatus :order="order" />
    </div>
  </template>
</template>
