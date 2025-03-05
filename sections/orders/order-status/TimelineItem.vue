<script setup lang="ts">
defineProps<{
  name: string;
  date: string;
  description: string;
}>();
</script>

<template>
  <div
    class="flex items-start justify-between gap-6 xl:gap-14 ps-5 border-s-2 border-border last:border-transparent"
  >
    <div class="relative pt-0 pb-6">
      <p class="-mt-1.5 text-sm font-medium">{{ name }}</p>
      <p class="mt-1 text-xs text-gray-600">{{ description }}</p>
      <div
        class="h-3 w-3 bg-gray-300 rounded-full absolute top-0 start-[-27px] z-10"
      ></div>
    </div>

    <p class="text-sm font-medium text-nowrap text-end">
      {{ dateFormat(new Date(date), "DD MMM YYYY") }}
    </p>
  </div>
</template>
