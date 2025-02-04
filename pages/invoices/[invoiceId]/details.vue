<script setup lang="ts">
import { useRoute } from "vue-router";
// CUSTOM COMPONENTS
import CustomBreadcrumb from "@/components/CustomBreadcrumb.vue";
import InvoicePreview from "@/sections/invoices/InvoicePreview.vue";
import { InvoiceOverviewSkeleton } from "@/sections/invoices/skeletons";
// CUSTOM COMPOSABLE
import { useFetch } from "@/hooks/useFetch";
// TYPES
import type { Invoice } from "@/types/Invoice";

const route = useRoute();

const { isLoading, data: invoice } = useFetch<Invoice>("/api/invoices", {
  params: { id: route.params.id },
});
</script>

<template>
  <div class="grid grid-cols-12 mt-2 mb-6">
    <!-- SHOW LOADING SKELETON -->
    <InvoiceOverviewSkeleton v-if="isLoading" />

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
    <InvoicePreview v-if="!isLoading && invoice" :invoice="invoice" />
  </div>
</template>
