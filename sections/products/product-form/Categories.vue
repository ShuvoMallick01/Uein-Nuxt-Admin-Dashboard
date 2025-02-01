<script setup lang="ts">
// SHADCN COMPONENT
import { SelectItem } from "@/components/ui/select";
// CUSTOM COMPONENT
import SelectField from "@/components/form/SelectField.vue";
// TYPES
import type { ProductAttribute } from "@/types/Product";

const { data: categories } = useFetch<ProductAttribute[]>(
  "/api/products/categories"
);
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
