<script setup lang="ts"></script>

<template>
  <div>
    <CustomBreadcrumb
      heading="Invoice Create"
      :links="[
        { name: 'Home', href: '/' },
        { name: 'Invoice Create', current: true },
      ]"
    />

    <Card class="p-6 mt-2 mb-6">
      <ClientOnly>
        <InvoiceForm />
      </ClientOnly>
    </Card>
  </div>
</template>
