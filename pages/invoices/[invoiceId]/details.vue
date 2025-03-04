<script setup lang="ts">
// TYPES
import type { Invoice } from "~/types/Invoice";

const route = useRoute();

const {
  data: invoice,
  status,
  error,
} = useFetch<Invoice>(`/api/invoices/${route.params.invoiceId}`);

definePageMeta({
  title: "Details",
});
</script>

<template>
  <div class="grid grid-cols-12 mt-2 mb-6">
    <!-- SHOW LOADING SKELETON -->
    <InvoiceOverviewSkeleton v-if="status === 'pending'" />

    <div class="col-span-12 2xl:col-span-8 2xl:col-start-3">
      <CustomBreadcrumb
        v-if="invoice"
        :heading="invoice.id"
        :links="[
          { name: 'Home', href: '/' },
          { name: 'Invoices', href: '/invoices' },
          { name: invoice?.id || '', current: true },
        ]"
      />
    </div>

    <!-- SHOW PAGE WHEN DATA IS LOADED -->
    <InvoicePreview v-if="status !== 'pending' && invoice" :invoice="invoice" />
  </div>
</template>
