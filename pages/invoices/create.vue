<script setup lang="ts">
// SHADCN COMPONENTS
import { Card } from "@/components/ui/card";
// SECTION COMPONENTS
import { InvoiceForm } from "@/sections/invoices/invoice-form";
// CUSTOM COMPONENTS
import CustomBreadcrumb from "@/components/CustomBreadcrumb.vue";
</script>

<template>
  <CustomBreadcrumb
    heading="Invoice Create"
    :links="[
      { name: 'Home', href: '/' },
      { name: 'Invoice Create', current: true },
    ]"
  />

  <Card class="p-6 mt-2 mb-6">
    <InvoiceForm />
  </Card>
</template>
