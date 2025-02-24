<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";
// CUSTOM COMPOSABLE
import { useChartOptions } from "./useVacancyChartOptions";

const { chartOptions, series } = useChartOptions();
</script>

<template>
  <ClientOnly>
    <Card class="p-0 col-span-full xl:col-span-4">
      <CardTitle class="px-5 pt-5">Vacancy Status</CardTitle>
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
      <Card class="p-5 col-span-full xl:col-span-4">
        <CardTitle>Vacancy Status</CardTitle>

        <div class="mt-6">
          <div
            class="w-full rounded-md h-[300px] bg-skeleton animate-pulse"
          ></div>
        </div>
      </Card>
    </template>
  </ClientOnly>
</template>
