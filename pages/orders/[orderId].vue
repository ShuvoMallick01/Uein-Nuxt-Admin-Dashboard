<script setup lang="ts">
import { useRoute } from "vue-router";
// TYPES
import type { Order } from "~/types/Order";

const route = useRoute();

definePageMeta({
  title: "Order Edit",
});

const {
  status,
  error,
  data: order,
} = useFetch<Order>(`/api/orders/${route.params.orderId}`);

if (error.value) console.log(error.value);
</script>

<template>
  <div>
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
  </div>
</template>
