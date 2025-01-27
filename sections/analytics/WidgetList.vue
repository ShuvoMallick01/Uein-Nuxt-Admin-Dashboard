<script setup lang="ts">
import { Icon } from "@iconify/vue";
// CUSTOM DATA
import { widgets } from "~/data/dashboards/analytics";
</script>

<template>
  <div class="grid grid-cols-12 gap-7 col-span-full xl:col-span-6">
    <Card
      class="col-span-full md:col-span-6"
      v-for="(widget, index) in widgets"
      :key="index"
    >
      <div>
        <p class="mb-5 text-sm font-medium text-gray-600">
          {{ widget.title }}
        </p>

        <div class="flex items-center gap-3 mb-2">
          <h5 class="font-semibold">
            {{ widget.number }}
          </h5>

          <Badge
            class="text-xs font-medium rounded-lg"
            :class="{
              'text-success-500 bg-success-25 dark:bg-success/5':
                widget.isIncrease,
              'text-error-500 bg-error-25 dark:bg-error/5': !widget.isIncrease,
            }"
          >
            {{ widget.percentage }}%
          </Badge>
        </div>

        <div class="flex items-center gap-2">
          <div
            class="grid w-6 h-6 text-gray-500 rounded-lg place-items-center bg-primary-50 dark:bg-primary/10 dark:text-primary"
          >
            <Icon icon="solar:eye-linear" height="14" />
          </div>

          <p class="text-xs font-medium text-gray-500">
            Last week {{ widget.weeklyViews }}
          </p>
        </div>
      </div>
    </Card>
  </div>
</template>
