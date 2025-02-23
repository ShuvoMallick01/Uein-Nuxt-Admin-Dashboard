<script setup lang="ts">
// CUSTOM UTILS METHODS
import { currency } from "~/utils/currency";
// CUSTOM DATA
import { transactions } from "~/data/dashboards/analytics";
</script>

<template>
  <Card class="col-span-full md:col-span-6 xl:col-span-4">
    <CardTitle class="mb-5">Transactions</CardTitle>

    <div class="space-y-4">
      <div
        v-for="item in transactions"
        :key="item.id"
        class="flex items-center justify-between gap-2 p-2 bg-gray-100 rounded-lg dark:bg-gray-50"
      >
        <div class="flex items-center gap-3">
          <div
            class="grid w-10 h-10 rounded-lg place-content-center text-primary bg-primary-50 dark:bg-primary/20"
          >
            <Icon :name="item.icon" height="20" />
          </div>

          <div>
            <p class="text-sm font-medium truncate">{{ item.title }}</p>
            <p class="text-xs leading-relaxed text-gray-600">
              {{ item.subTitle }} Users
            </p>
          </div>
        </div>

        <p class="text-base pe-2">
          {{
            item.value > 0
              ? `+${currency(item.value, 0)}`
              : currency(item.value, 0)
          }}
        </p>
      </div>
    </div>
  </Card>
</template>
