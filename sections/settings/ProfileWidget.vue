<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <div class="space-y-5">
    <h5 class="text-base font-medium leading-none">{{ title }}</h5>

    <div class="grid gap-6 xl:grid-cols-2">
      <slot></slot>
    </div>
  </div>
</template>
