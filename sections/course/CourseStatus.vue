<script setup lang="ts">
// DATA
import { status } from "~/data/dashboards/course";
</script>

<template>
  <Card
    class="p-6 text-center align-top col-span-full xs:col-span-4 xl:col-span-2"
    v-for="item in status"
    :key="item.id"
  >
    <div
      class="grid w-12 h-12 mx-auto rounded-lg mb-7 place-items-center shrink-0"
      :class="{
        'bg-primary-50 text-primary-500 dark:bg-primary/10':
          item.color === 'primary',
        'bg-warning-50 text-warning-500 dark:bg-warning/10':
          item.color === 'warning',
        'bg-success-50 text-success-500 dark:bg-success/10':
          item.color === 'success',
      }"
    >
      <Icon :name="item.icon" size="24" />
    </div>

    <div class="truncate">
      <h5
        class="font-semibold"
        :class="{
          'text-warning-500': item.color === 'warning',
          'text-success-500': item.color === 'success',
          'text-primary-500': item.color === 'primary',
        }"
      >
        {{ item.value }}
      </h5>

      <p class="text-sm text-gray-400 truncate">{{ item.title }}</p>
    </div>
  </Card>
</template>
