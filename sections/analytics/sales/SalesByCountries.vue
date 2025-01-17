<script setup lang="ts">
// CUSTOM COMPONENT
import SaleByCountry from "./SaleByCountry.vue";
// LIST DATA
import { salesByCountries } from "@/data/dashboards/analytics";
</script>

<template>
  <Card class="col-span-full md:col-span-6 xl:col-span-4">
    <CardTitle class="mb-5">Sales By Countries</CardTitle>

    <div class="space-y-4">
      <SaleByCountry
        v-for="item in salesByCountries"
        :id="item.id"
        :key="item.id"
        :name="item.name"
        :flag="item.flag"
        :users="item.users"
        :progress="item.progress"
      />
    </div>
  </Card>
</template>
