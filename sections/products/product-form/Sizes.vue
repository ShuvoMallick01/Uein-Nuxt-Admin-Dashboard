<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useField } from "vee-validate";
// TYPES
import type { ProductAttribute } from "@/types/Product";

const { value, errorMessage, handleChange } = useField<string[]>("sizes");

const sizes = ref<ProductAttribute[]>([]);
const isLoading = ref(false);

onMounted(async () => {
  isLoading.value = true;

  try {
    sizes.value = await $fetch("/api/products/sizes");
    isLoading.value = false;
  } catch (error) {
    console.log(error, "Failed to fetch colors");
  }
});
</script>

<template>
  <div>
    <Label for="sizes" class="inline-block mb-3 text-sm font-medium"
      >Sizes</Label
    >

    <div class="flex flex-wrap items-center gap-4">
      <!-- SHOW LOADING SPINNER -->
      <div
        v-if="isLoading"
        v-for="item in 5"
        :key="item"
        class="rounded-md animate-pulse size-8 bg-skeleton"
      ></div>

      <ToggleGroup
        v-if="!isLoading && sizes"
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
          class="hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-gray-200 data-[state=on]:text-accent-foreground border border-gray-200 hover:bg-gray-100 dark:border-gray-50 dark:hover:bg-gray-50"
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
