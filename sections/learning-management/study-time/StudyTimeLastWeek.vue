<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";
// SHADCN COMPONENTS
import { useChartOptions } from "./useChatOptions";
// CUSTOM COMPOSABLE
const { chartOptions, series } = useChartOptions();
</script>

<template>
  <ClientOnly>
    <Card class="px-5 pt-6 pb-2 col-span-full xl:col-span-4">
      <CardTitle>Study Time Last Week</CardTitle>
      <VueApexCharts
        type="bar"
        height="265"
        :options="chartOptions"
        :series="series"
      />
    </Card>
  </ClientOnly>
</template>
