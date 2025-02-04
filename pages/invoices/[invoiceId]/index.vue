<script setup lang="ts">
import { useRoute } from "vue-router";
// TYPES
import type { Invoice } from "@/types/Invoice";

const route = useRoute();

const {
  data: invoice,
  status,
  error,
} = await useAsyncData<Invoice>(
  "Invoice",
  () => $fetch(`/api/invoices/${route.params.invoiceId}`),
  {
    lazy: false,
    server: true,
  }
);

console.log("CSR", invoice.value);
</script>

<template>
  <CustomBreadcrumb
    v-if="invoice"
    heading="Invoice Edit"
    :links="[
      { name: 'Home', href: '/' },
      { name: 'Invoices', href: '/invoices' },
      { name: invoice?.id || '', current: true },
    ]"
  />

  <Card class="p-6 mt-2 mb-6">
    <!-- SHOW LOADING SKELETON -->
    <InvoiceFormSkeleton v-if="status === 'pending'" />

    <!-- INVOICE FORM WITH DATA -->
    <InvoiceForm v-if="status !== 'pending' && invoice" :invoice="invoice" />
  </Card>
</template>
