<script setup lang="ts">
defineProps<{
  modelValue?: string;
  placeholder?: string;
  updateModelValue?: (payload: string | number) => void;
}>();
</script>

<template>
  <div class="relative w-full">
    <Input
      type="search"
      class="rounded-lg ps-9"
      :modelValue="modelValue ?? ''"
      @update:modelValue="updateModelValue"
      :placeholder="placeholder ?? 'Search'"
    />

    <Icon
      height="18"
      name="eva:search-outline"
      class="absolute inset-y-0 my-auto text-muted start-3"
    />
  </div>
</template>
