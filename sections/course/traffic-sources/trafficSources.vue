<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";
// CUSTOM COMPOSABLE
import { useChartOptions } from "./useTrafficChartOptions";

const { chartOptions, series } = useChartOptions();
</script>

<template>
  <ClientOnly>
    <Card class="p-0 col-span-full md:col-span-6 2xl:col-span-4">
      <CardTitle class="px-5 pt-5">Traffic Sources</CardTitle>
      <div class="pb-2 -mt-10">
        <VueApexCharts
          type="bar"
          height="360"
          :options="chartOptions"
          :series="series"
        />
      </div>
    </Card>

    <template #fallback>
      <Card class="p-0 col-span-full md:col-span-6 2xl:col-span-4">
        <CardTitle class="px-5 pt-5">Traffic Sources</CardTitle>
        <div class="pb-2 -mt-10">
          <div class="flex items-center justify-center h-[360px]"></div>
        </div>
      </Card>
    </template>
  </ClientOnly>
</template>
