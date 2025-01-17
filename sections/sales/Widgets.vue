<script setup lang="ts">
import { Icon } from "@iconify/vue";
// CUSTOM UTILS METHODS
import { cn } from "@/lib/utils";
import { currency } from "@/lib/currency";
// DATA LIST
import { widgets } from "@/data/dashboards/sales";
</script>

<template>
  <Card
    class="relative col-span-full sm:col-span-6 xl:col-span-3"
    v-for="widget in widgets"
    :key="widget.id"
  >
    <p class="mb-4 text-sm font-medium text-gray-600">
      {{ widget.title }}
    </p>

    <h5 class="font-semibold">
      {{ currency(widget.amount, 0) }}
    </h5>

    <div class="flex items-center gap-1 mt-2 truncate">
      <Badge
        :class="
          cn('rounded-md gap-2 text-xs font-medium ', {
            'bg-success-25 text-success-500 dark:bg-success/10': widget.isUp,
            'bg-error-25 text-error-500 dark:bg-error/10': !widget.isUp,
          })
        "
      >
        <Icon
          :icon="widget.isUp ? 'iconamoon:trend-up' : 'iconamoon:trend-down'"
          height="14"
        />
        <span>{{ widget.value }}%</span>
      </Badge>

      <p class="text-xs font-medium text-gray-500 truncate">From Last Month</p>
    </div>

    <div
      class="absolute grid rounded-xl w-14 h-14 bg-primary-25 text-primary place-items-center top-5 ltr:right-5 rtl:left-5"
      :class="{
        'bg-success-25 text-success-500 dark:bg-success/10':
          widget.color === 'success',
        'bg-primary-25 text-primary-500 dark:bg-primary/10':
          widget.color === 'primary',
        'bg-warning-25 text-warning-500 dark:bg-warning/10':
          widget.color === 'warning',
        'bg-info-25 text-info-500 dark:bg-info/10': widget.color === 'info',
      }"
    >
      <Icon :icon="widget.icon" height="32" />
    </div>
  </Card>
</template>
