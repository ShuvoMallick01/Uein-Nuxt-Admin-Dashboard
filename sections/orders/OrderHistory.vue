<script setup lang="ts">
// SHADCN COMPONENTS
import { Card } from "@/components/ui/card";
// CUSTOM COMPONENTS
import { Icon } from "@iconify/vue";

// ==============================================================
interface OrderHistory {
  id: number;
  title: string;
  icon: string;
  color: string;
  totalOrder: number;
}
// ==============================================================

const {
  status,
  error,
  data: orderHistories,
} = useAsyncData<OrderHistory[]>(
  "orderHistories",
  () => $fetch("/api/orders/histories"),
  { immediate: true }
);

if (error.value) console.log(error.value);
</script>

<template>
  <div class="grid grid-cols-1 mb-7 sm:grid-cols-2 xl:grid-cols-4 gap-7">
    <!-- SHOW LOADING SKELETONS -->
    <template v-if="status === 'pending'">
      <Card class="flex items-center gap-4 p-5" v-for="item in 4" :key="item">
        <div class="w-12 h-12 rounded-md bg-skeleton animate-pulse"></div>

        <div class="flex-1 space-y-3">
          <p class="w-2/3 h-3 rounded-md bg-skeleton animate-pulse"></p>
          <p class="rounded-md h-7 w-28 bg-skeleton animate-pulse"></p>
        </div>
      </Card>
    </template>

    <!-- SHOW DATA WHEN IS LOADED -->
    <template v-else-if="status !== 'pending' && orderHistories">
      <Card v-for="item in orderHistories">
        <div class="flex items-center gap-4">
          <div class="grid rounded-lg place-items-center size-12 bg-active">
            <Icon :icon="item.icon" height="27" :class="item.color" />
          </div>

          <div>
            <p class="text-sm font-medium text-gray-600">{{ item.title }}</p>
            <h5 class="font-semibold">{{ item.totalOrder }}</h5>
          </div>
        </div>
      </Card>
    </template>
  </div>
</template>
