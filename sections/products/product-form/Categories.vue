<script setup lang="ts">
// SHADCN COMPONENT
import { SelectItem } from "~/components/ui/select";
// TYPES
import type { ProductAttribute } from "~/types/Product";

const {
  data: categories,
  error,
  status,
} = useFetch<ProductAttribute[]>("/api/products/categories");

if (error.value) {
  console.error("Failed to fetch categories:", error.value);
}
</script>

<template>
  <SelectField
    id="category"
    name="category"
    label="Category"
    placeholder="Select category"
  >
    <SelectItem v-for="item in categories" :key="item.id" :value="item.title">
      {{ item.title }}
    </SelectItem>
  </SelectField>
</template>
