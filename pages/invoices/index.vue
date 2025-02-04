<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { Icon } from "@iconify/vue";
// TABLE COLUMNS DEFINITION
import { columns } from "./invoicesColumn";
// TYPES
import type { Invoice } from "@/types/Invoice";

let isLoading = ref(true);

const {
  status,
  error,
  data: invoices,
} = useAsyncData<Invoice[], Error>("products", () => $fetch("/api/invoices"));

// HANDLE DELETE USERS BY IDS
const handleDeleteInvoices = async (invoices: Invoice[]) => {
  try {
    isLoading.value = true;
    const ids = invoices.map((invoice) => invoice.id);
    await $fetch("/api/invoices", { method: "DELETE" as const, body: { ids } });
    console.log("Invoices deleted successfully");
  } catch (error) {
    console.log(error);
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
  <CustomBreadcrumb
    heading="Invoices"
    :links="[
      { name: 'Home', href: '/' },
      { name: 'Invoice', current: true },
    ]"
  />

  <Card class="p-0 pt-5">
    <!-- SHOW LOADING SKELETON -->
    <InvoiceListSkeleton v-if="isLoading" />

    <!-- DATA NOT FOUND UI -->
    <DataNotFound v-else-if="invoices?.length === 0" />

    <!-- SHOW DATA TABLE WHEN DATA IS AVAILABLE -->
    <DataTable
      v-else-if="invoices"
      :data="invoices"
      :columns="columns"
      @delete="handleDeleteInvoices"
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
              placeholder="Find Invoice"
              :modelValue="globalFilter"
              :updateModelValue="(value) => setGlobalFilter(String(value))"
            />

            <!-- STATUS BASED FILTER -->
            <Select
              :model-value="`${column('status')?.getFilterValue() || ''}`"
              @update:model-value="column('status')?.setFilterValue($event)"
            >
              <SelectTrigger>
                <SelectValue
                  placeholder="Status"
                  :class="{ 'text-muted': !column('status')?.getFilterValue() }"
                />
              </SelectTrigger>

              <SelectContent>
                <SelectItem
                  v-for="status of ['Complete', 'Pending']"
                  :key="status"
                  :value="status"
                >
                  {{ status }}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div class="flex items-center gap-4">
            <!-- CLEAR FILTER BUTTON -->
            <Button v-if="isFiltered" @click="handleResetFilters" color="error">
              <Icon icon="heroicons:trash" height="18" class="me-2" />
              Clear
            </Button>

            <!-- NAVIGATE BUTTON -->
            <Button @click="$router.push('/invoices/create')">
              <Icon icon="ic:round-plus" height="18" class="me-2" />
              Add Invoice
            </Button>
          </div>
        </div>
      </template>
    </DataTable>
  </Card>
</template>
