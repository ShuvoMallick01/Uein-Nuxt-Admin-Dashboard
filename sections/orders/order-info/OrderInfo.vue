<script setup lang="ts">
// CUSTOM COMPONENTS
import OrderInfoCard from "./OrderInfoCard.vue";
// TYPES
import type { Order } from "~/types/Order";

defineProps<{ order: Order }>();
</script>

<template>
  <div class="grid grid-cols-12 mt-2 mb-6 gap-7">
    <OrderInfoCard
      name="mingcute:truck-line"
      iconColor="success"
      :title="order.customer.name"
      heading="Shipping Details"
    >
      {{ order.shipping }}
    </OrderInfoCard>

    <OrderInfoCard
      name="ion:card-outline"
      iconColor="default"
      :title="order.customer.name"
      heading="Billing Details"
    >
      {{ order.billing }}
    </OrderInfoCard>

    <OrderInfoCard
      name="solar:dollar-linear"
      iconColor="warning"
      title="ID: #TSD456DF41SD5"
      heading="Payment Details"
    >
      Payment Method: {{ order.payment.paymentMethod }} <br />
      Number: {{ order.payment.cardNumber }}
    </OrderInfoCard>

    <OrderInfoCard
      name="fluent:book-information-24-regular"
      iconColor="info"
      :title="order.customer.name"
      heading="Customer Info"
    >
      {{ order.customer.email }} <br />
      {{ order.customer.phone }}
    </OrderInfoCard>
  </div>
</template>
