<script setup lang="ts">
// CUSTOM COMPONENTS
import OrderWidgetCard from "./OrderWidgetCard.vue";
// CUSTOM UTILS METHODS
import { currency } from "~/lib/currency";
import { dateFormat } from "~/lib/dateFormat";
// TYPES
import type { Order } from "~/types/Order";

defineProps<{ order: Order }>();
</script>

<template>
  <div class="grid grid-cols-12 mb-6 gap-7">
    <OrderWidgetCard description="Order Id" :title="`${order.id}`" />
    <OrderWidgetCard
      description="Order Date"
      :title="dateFormat(order.createAt, 'DD MMM YYYY')"
    />

    <OrderWidgetCard
      description="Delivery Date"
      :title="
        order.deliveredAt ? dateFormat(order.deliveredAt, 'DD MMM YYYY') : 'N/A'
      "
    />

    <OrderWidgetCard
      description="Order Amount"
      :title="currency(order.totalAmount)"
    />
    <OrderWidgetCard description="Invoice No" :title="`${order.invoiceId}`" />
    <OrderWidgetCard description="Order Status" :title="order.status" />
  </div>
</template>
