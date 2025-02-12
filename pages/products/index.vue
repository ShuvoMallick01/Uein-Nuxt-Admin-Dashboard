<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { toast } from "vue-sonner";
// CUSTOM COMPONENTS
import ProductListSkeleton from "~/sections/products/skeletons/ProductListSkeleton.vue";
// TABLE COLUMNS DEFINITION
import { columns } from "./productsColumns";
// TYPES
import type { Product } from "~/types/Product";

let isLoading = ref(true);

const {
  status,
  error,
  data: products,
} = useAsyncData<Product>("products", () => $fetch("/api/products"));

// HANDLE DELETE PRODUCT BY IDS
const handleDeleteProducts = async (products: Product[]) => {
  try {
    isLoading.value = true;
    const ids = products.map(({ id }) => id);
    await $fetch("/api/products", { method: "DELETE", body: { ids } });
    toast.success("Products deleted successfully");
  } catch (error) {
    console.error(error);
    toast.error("Something went wrong");
  } finally {
    isLoading.value = false;
  }
};

if (error.value) {
  console.log(error.value);
}

onMounted(() => {
  isLoading.value = status.value === "pending";
});

watch(status, (newStatus) => {
  isLoading.value = newStatus === "pending";
});
</script>

<template>
  <div>
    <CustomBreadcrumb
      heading="Products"
      :links="[
        { name: 'Home', href: '/' },
        { name: 'Products', current: true },
      ]"
    />

    <Card class="p-0 pt-5">
      <!-- SHOW LOADING SKELETON -->
      <ProductListSkeleton v-if="isLoading" />

      <!-- DATA NOT FOUND UI -->
      <DataNotFound v-else-if="products?.length === 0" />

      <!-- SHOW DATA TABLE WHEN DATA IS AVAILABLE -->
      <DataTable
        v-else-if="products"
        :data="products"
        :columns="columns"
        @delete="handleDeleteProducts"
      >
        <template
          v-slot:toolbar="{
            isFiltered,
            globalFilter,
            column,
            handleResetFilters,
            setGlobalFilter,
          }"
        >
          <div
            class="flex flex-col gap-4 px-5 mt-1 mb-5 lg:justify-between lg:flex-row lg:items-center"
          >
            <div
              class="flex flex-col items-center gap-4 lg:flex-row lg:w-3/4 2xl:w-3/5"
            >
              <!-- GLOBAL SEARCH FILTER -->
              <SearchInput
                placeholder="Find Product"
                :modelValue="globalFilter"
                :updateModelValue="(value) => setGlobalFilter(String(value))"
              />

              <div class="flex items-center w-full gap-3">
                <!-- STATUS BASED FILTER -->
                <Select
                  :model-value="`${column('status')?.getFilterValue() || ''}`"
                  @update:model-value="column('status')?.setFilterValue($event)"
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder="Status"
                      :class="{
                        'text-muted': !column('status')?.getFilterValue(),
                      }"
                    />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                  </SelectContent>
                </Select>

                <!-- STOCK BASED FILTER -->
                <Select
                  :model-value="`${column('stock')?.getFilterValue() || ''}`"
                  @update:model-value="column('stock')?.setFilterValue($event)"
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder="Stock"
                      :class="{
                        'text-muted': !column('stock')?.getFilterValue(),
                      }"
                    />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="1">In Stock</SelectItem>
                    <SelectItem value="0">Out of Stock</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <!-- CLEAR FILTER BUTTON -->
              <Button
                v-if="isFiltered"
                @click="handleResetFilters"
                color="error"
              >
                <Icon icon="heroicons:trash" height="18" class="me-2" />
                Clear
              </Button>

              <!-- NAVIGATE BUTTON -->
              <Button @click="$router.push('/products/create')">
                <Icon icon="ic:round-plus" height="18" class="me-2" />
                Add Product
              </Button>
            </div>
          </div>
        </template>
      </DataTable>
    </Card>
  </div>
</template>
