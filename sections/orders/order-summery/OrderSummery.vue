<script setup lang="ts">
// CUSTOM COMPONENT
import TableRowItem from "./TableRowItem.vue";
// CUSTOM UTILS METHOD
import { currency } from "@/lib/currency";
// TYPES
import type { Order } from "@/types/Order";

defineProps<{ order: Order }>();
</script>

<template>
  <Card class="p-0 pt-5 pb-1">
    <CardTitle class="px-5 mb-5">Order Summary</CardTitle>

    <Table>
      <TableBody>
        <TableRow v-for="item in order.items" :key="item.id">
          <TableCell>
            <div class="flex items-center gap-3">
              <Avatar shape="square">
                <AvatarImage :src="item.image" :alt="item.name" />
                <AvatarFallback>{{ item.name[0] }}</AvatarFallback>
              </Avatar>

              <div>
                <p class="text-sm font-medium">{{ item.name }}</p>
                <p class="pt-1 text-xs text-gray-600">
                  {{ currency(item.price) }} x {{ item.quantity }}
                </p>
              </div>
            </div>
          </TableCell>

          <TableCell class="!text-end text-sm font-medium">
            {{ currency(item.price * item.quantity) }}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>

    <Table class="mt-2">
      <TableBody>
        <TableRowItem name="Sub Total" :value="order.subTotalAmount" />
        <TableRowItem name="Estimated Tax" :value="order.taxAmount" />
        <TableRowItem name="Item Discounts" :value="order.discountAmount" />
        <TableRowItem
          name="Shipping Charge"
          :value="order.shippingChargeAmount"
        />
        <TableRowItem
          isLast
          name="Total Amount (USD)"
          :value="order.totalAmount"
        />
      </TableBody>
    </Table>
  </Card>
</template>
