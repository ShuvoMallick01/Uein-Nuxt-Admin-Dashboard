<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";
// CUSTOM COMPOSABLE
import { useApexChartOptions } from "~/composables/useApexChartOptions";

const series = ref([34, 30, 36]);

const chartOptions = useApexChartOptions({
  labels: ["Online", "Offline", "Direct"],
  colors: ["#188FDD", "#2940D3", "#D97706", "#e11d48"],
  plotOptions: {
    polarArea: {
      rings: { strokeWidth: 0 },
      spokes: { strokeWidth: 0 },
    },
  },
  fill: { opacity: 1 },
  yaxis: { show: false },
  stroke: { show: false },
  legend: {
    offsetY: 5,
    offsetX: 0,
    fontWeight: 500,
    fontSize: "12px",
    position: "bottom",
    horizontalAlign: "center",
    itemMargin: { horizontal: 12, vertical: 0 },
    markers: { shape: "circle", strokeWidth: 0, offsetX: -5, size: 6 },
  },
  tooltip: {
    y: { formatter: (val) => `${val}%` },
  },
});
</script>

<template>
  <ClientOnly>
    <Card class="col-span-full xl:col-span-4">
      <CardTitle class="mb-2 text-center xl:mb-6">Revenue Sources</CardTitle>
      <CardContent class="flex flex-col items-center justify-center">
        <VueApexCharts
          type="polarArea"
          height="290"
          :options="chartOptions"
          :series="series"
        />
      </CardContent>
    </Card>

    <template #fallback>
      <Card class="p-5 col-span-full xl:col-span-4">
        <CardTitle>Revenue Sources</CardTitle>

        <div class="mt-6">
          <div
            class="w-full rounded-md h-[300px] bg-skeleton animate-pulse"
          ></div>
        </div>
      </Card>
    </template>
  </ClientOnly>
</template>
