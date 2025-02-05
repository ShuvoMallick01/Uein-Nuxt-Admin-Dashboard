<script setup lang="ts">
defineProps<{ title: string; description: string; id: string }>();
</script>

<template>
  <div
    class="flex items-center justify-between gap-10 p-4 border border-gray-200 rounded-lg dark:border-border"
  >
    <Label :for="id" class="font-medium cursor-pointer">
      {{ title }}

      <p class="mt-2 text-xs leading-5 text-muted">{{ description }}</p>
    </Label>

    <Switch :id="id" />
  </div>
</template>
