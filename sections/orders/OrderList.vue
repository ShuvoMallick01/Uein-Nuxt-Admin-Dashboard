<script setup lang="ts">
// TABLE COLUMNS DEFINITION
import { columns } from "./ordersColumns";
// TYPES
import type { Order, OrderStatus, PaymentMethods } from "~/types/Order";

const {
  data: orders,
  status,
  error,
  refresh: refreshOrders,
} = useFetch<Order[]>("/api/orders");
const { data: statuses } = useFetch<OrderStatus[]>("/api/orders/statuses");
const { data: paymentMethods } = useFetch<PaymentMethods[]>(
  "/api/orders/payment-methods"
);

// HANDLE DELETE ORDERS BY IDS
const handleDeleteOrders = async (orders: Order[]) => {
  try {
    const ids = orders.map((order) => order.id);
    await $fetch("/api/orders", {
      method: "DELETE",
      body: {
        ids,
      },
    });
    await refreshOrders();
    console.log("Orders deleted successfully");
  } catch (error) {
    console.log(error);
  }
};

if (error.value) console.log(error.value);
</script>

<template>
  <Card class="p-0 pt-5 mb-6">
    <!-- SHOW LOADING SKELETON -->
    <OrderListSkeleton v-if="status === 'pending'" />

    <!-- DATA NOT FOUND UI -->
    <DataNotFound v-else-if="orders?.length === 0" />

    <!-- SHOW DATA TABLE WHEN DATA IS AVAILABLE -->
    <DataTable
      v-else-if="orders"
      :data="orders"
      :columns="columns"
      @delete="handleDeleteOrders"
    >
      <template
        v-slot:toolbar="{
          isFiltered,
          globalFilter,
          column,
          handleResetFilters,
          setGlobalFilter,
        }"
      >
        <div
          class="flex flex-col gap-4 px-5 mt-1 mb-5 lg:justify-between lg:flex-row lg:items-center"
        >
          <div
            class="flex flex-col items-center gap-4 lg:flex-row lg:w-3/4 2xl:w-3/5"
          >
            <!-- GLOBAL SEARCH FILTER -->
            <SearchInput
              placeholder="Find Orders"
              :modelValue="globalFilter"
              :updateModelValue="(value) => setGlobalFilter(String(value))"
            />

            <div class="flex items-center w-full gap-3">
              <!-- STATUS BASED FILTER -->
              <Select
                :model-value="`${column('status')?.getFilterValue() || ''}`"
                @update:model-value="column('status')?.setFilterValue($event)"
              >
                <SelectTrigger>
                  <SelectValue
                    placeholder="Status"
                    :class="{
                      'text-muted': !column('status')?.getFilterValue(),
                    }"
                  />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem
                    v-for="status in statuses"
                    :key="status.id"
                    :value="status.value"
                  >
                    {{ status.title }}
                  </SelectItem>
                </SelectContent>
              </Select>

              <!-- PAYMENT METHODS BASED FILTER -->
              <Select
                :model-value="`${
                  column('paymentMethod')?.getFilterValue() || ''
                }`"
                @update:model-value="
                  column('paymentMethod')?.setFilterValue($event)
                "
              >
                <SelectTrigger>
                  <SelectValue
                    placeholder="Payment Methods"
                    :class="{
                      'text-muted': !column('paymentMethod')?.getFilterValue(),
                    }"
                  />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem
                    v-for="paymentMethod in paymentMethods"
                    :key="paymentMethod.id"
                    :value="paymentMethod.value"
                  >
                    {{ paymentMethod.title }}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <!-- CLEAR FILTER BUTTON -->
          <Button v-if="isFiltered" @click="handleResetFilters" color="error">
            <Icon name="heroicons:trash" size="18" class="me-2" />
            Clear
          </Button>
        </div>
      </template>
    </DataTable>
  </Card>
</template>
