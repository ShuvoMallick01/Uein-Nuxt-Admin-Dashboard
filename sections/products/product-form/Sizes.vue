<script setup lang="ts">
// TYPES
import type { ProductAttribute } from "~/types/Product";

const { value, errorMessage, handleChange } = useField<string[]>("sizes");

const {
  data: sizes,
  status,
  error,
} = useFetch<ProductAttribute[]>("/api/products/sizes");

// Error Handling
if (error.value) {
  console.error("Failed to fetch sizes:", error.value);
}
</script>

<template>
  <div>
    <Label for="sizes" class="inline-block mb-3 text-sm font-medium"
      >Sizes</Label
    >

    <div class="flex flex-wrap items-center gap-4">
      <!-- SHOW LOADING SPINNER -->
      <div
        v-if="status === 'pending'"
        v-for="item in 5"
        :key="item"
        class="rounded-md animate-pulse size-8 bg-skeleton"
      ></div>

      <ToggleGroup
        v-if="status !== 'pending' && sizes"
        type="multiple"
        class="inline-flex gap-2"
        :model-value="value"
        @update:model-value="handleChange"
      >
        <ToggleGroupItem
          v-for="size in sizes"
          :key="size.id"
          :value="size.value"
          size="sm"
          variant="outline"
          class="size-8 text-xs"
        >
          {{ size.title }}
        </ToggleGroupItem>
      </ToggleGroup>
    </div>

    <span
      role="alert"
      v-if="errorMessage"
      class="inline-block mt-2 text-xs font-medium text-error ms-2"
    >
      {{ errorMessage }}
    </span>
  </div>
</template>
