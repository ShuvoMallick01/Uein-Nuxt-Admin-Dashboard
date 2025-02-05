<script setup lang="ts">
defineProps<{ label: string; id: string }>();
</script>

<template>
  <div class="flex items-center justify-between p-4 space-x-2 cursor-pointer">
    <Label class="font-medium" :for="id">{{ label }}</Label>
    <Switch :id="id" />
  </div>
</template>
