<script setup lang="ts">
// TYPES
import type { Invoice } from "~/types/Invoice";

const route = useRoute();

definePageMeta({
  title: "Invoice Edit",
});

const {
  data: invoice,
  status,
  error,
} = useFetch<Invoice>(`/api/invoices/${route.params.invoiceId}`);

if (error.value) console.log(error.value);
</script>

<template>
  <div>
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
      <ClientOnly>
        <InvoiceForm
          v-if="status !== 'pending' && invoice"
          :invoice="invoice"
        />
      </ClientOnly>
    </Card>
  </div>
</template>
