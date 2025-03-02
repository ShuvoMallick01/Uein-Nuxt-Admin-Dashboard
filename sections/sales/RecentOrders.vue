<script setup lang="ts">
// CUSTOM UTILS METHOD
import { currency } from "~/utils/currency";
// CUSTOM DATA
import { recentOrders } from "~/data/dashboards/sales";
</script>

<template>
  <Card class="p-0 col-span-full lg:col-span-4">
    <CardTitle class="p-5">Recent Orders</CardTitle>

    <div
      :key="order.id"
      v-for="order in recentOrders"
      class="flex items-center justify-between px-5 py-2.5 border-b border-border last-of-type:border-b-0"
    >
      <div class="flex items-center gap-3">
        <Avatar shape="square">
          <AvatarImage :src="order.img" :alt="order.productName" />
          <AvatarFallback>P</AvatarFallback>
        </Avatar>

        <div>
          <RouterLink
            to="#"
            class="text-sm font-medium leading-none hover:underline"
          >
            {{ order.productName }}
          </RouterLink>

          <p class="mt-0.5 text-xs text-gray-600">{{ order.time }} mins ago</p>
        </div>
      </div>

      <p class="text-sm font-semibold">{{ currency(order.price) }}</p>
    </div>
  </Card>
</template>
