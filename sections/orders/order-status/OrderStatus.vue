<script setup lang="ts">
// CUSTOM COMPONENT
import TimelineItem from "./TimelineItem.vue";
import OrderStatusSkeleton from "../skeletons/OrderStatusSkeleton.vue";
// TYPES
import type { Order } from "@/types/Order";
import type { Status } from "@/types/Status";

const props = defineProps<{ order: Order }>();

const { status, data: statuses } = await useFetch<Status[]>(
  "/api/orders/statuses"
);

const handleUpdateStatus = async (status: string) => {
  try {
    await $fetch(`/api/orders/${props.order.id}`, {
      method: "PATCH",
      body: status,
    });
    console.log("Status updated successfully");
  } catch (error) {
    console.error("Something went wrong");
  }
};
</script>

<template>
  <OrderStatusSkeleton v-if="status === 'pending'" />

  <Card class="px-5 pt-5 pb-2" v-else-if="status !== 'pending' && statuses">
    <div class="flex items-start justify-between mb-5">
      <CardTitle>Order Status</CardTitle>

      <Select
        @update:modelValue="handleUpdateStatus"
        :defaultValue="order.status.toLowerCase()"
        :disabled="order.status === 'Delivered'"
      >
        <SelectTrigger
          class="text-[13px] font-semibold w-20 h-8 border-none rounded-lg bg-active outline-none focus:ring-0 focus:ring-offset-0"
        >
          <SelectValue placeholder="Select a Status" />
        </SelectTrigger>

        <SelectContent class="text-[13px] font-medium text-gray-600">
          <SelectItem
            v-for="status in statuses"
            :value="status.value"
            :key="status.id"
          >
            {{ status.title }}
          </SelectItem>
        </SelectContent>
      </Select>
    </div>

    <CardContent class="ps-2">
      <TimelineItem
        :date="order.createAt"
        name="Order Placed"
        description="Your order has been successfully submitted."
      />

      <TimelineItem
        :date="order.createAt"
        name="Order Processing"
        description="Once the order is received, it goes through the processing stage. During this time, the items are gathered, and the order is prepared for shipment."
      />

      <!-- IF ORDER IS READY TO SHIPPED -->
      <TimelineItem
        v-if="order.status === 'Shipped' || order.status === 'Delivered'"
        :date="order.createAt"
        name="Shipped Order"
        description="The order is shipped out to the customer's designated delivery address."
      />

      <TimelineItem
        v-if="order.status === 'Shipped' || order.status === 'Delivered'"
        :date="order.createAt"
        name="Out for Delivery"
        description="This status indicates that the order is currently out for delivery by the shipping or courier company."
      />

      <!-- IF ORDER IS DELIVERED -->
      <TimelineItem
        v-if="order.status === 'Delivered'"
        :date="order.createAt"
        name="Delivered"
        description="Finally, when the order successfully reaches the customer's address and is handed over, the status changes to Delivered."
      />
    </CardContent>
  </Card>
</template>
