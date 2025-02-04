<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
// TABLE COLUMNS DEFINITION
import { columns } from "./ordersColumns";
// TYPES
import type { Order, OrderStatus, PaymentMethods } from "@/types/Order";

let isLoading = ref(true);

const { status, error, data: orders } = useFetch<Order[]>("/api/orders");

const { data: statuses } = useFetch<OrderStatus[]>("/api/orders/statuses");

const { data: paymentMethods } = useFetch<PaymentMethods[]>(
  "/api/orders/payment-methods"
);

if (error.value) console.log(error.value);

// HANDLE DELETE ORDERS BY IDS
const handleDeleteOrders = async (orders: Order[]) => {
  try {
    isLoading.value = true;
    const ids = orders.map((order) => order.id);
    await $fetch("/api/orders", {
      method: "DELETE",
      body: {
        ids,
      },
    });
    console.log("Orders deleted successfully");
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  isLoading.value = status.value === "pending";
});

watch(status, (newStatus) => {
  isLoading.value = newStatus === "pending";
});
</script>

<template>
  <Card class="p-0 pt-5 mb-6">
    <!-- SHOW LOADING SKELETON -->
    <OrderListSkeleton v-if="isLoading" />

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
            <div class="relative w-full">
              <Input
                type="search"
                placeholder="Find Order No"
                class="rounded-lg ps-9"
                :modelValue="globalFilter ?? ''"
                @update:modelValue="(value) => setGlobalFilter(String(value))"
              />

              <Icon
                height="18"
                icon="eva:search-outline"
                class="absolute inset-y-0 my-auto text-muted start-3"
              />
            </div>

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
                    v-for="payment in paymentMethods"
                    :key="payment.id"
                    :value="payment.value"
                  >
                    {{ payment.title }}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <!-- CLEAR FILTER BUTTON -->
          <Button v-if="isFiltered" @click="handleResetFilters" color="error">
            <Icon icon="heroicons:trash" height="18" class="me-2" />
            Clear
          </Button>
        </div>
      </template>
    </DataTable>
  </Card>
</template>
