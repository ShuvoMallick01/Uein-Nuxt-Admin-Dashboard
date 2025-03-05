<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";
// CUSTOM COMPOSABLE
import { useApexChartOptions } from "~/composables/useApexChartOptions";

const series = ref([35, 30, 35]);

const chartOptions = useApexChartOptions({
  stroke: { show: false },
  labels: ["New", "Open", "Closed"],
  colors: ["#188FDD", "#2940D3", "#D97706"],
  plotOptions: { pie: { donut: { size: "60%" } } },
  legend: {
    offsetY: 10,
    offsetX: 0,
    fontWeight: 500,
    position: "bottom",
    horizontalAlign: "center",
    itemMargin: { horizontal: 12, vertical: 5 },
    markers: { shape: "circle", strokeWidth: 0, offsetX: -5, size: 6 },
  },
  responsive: [{ breakpoint: 1280, options: { chart: { height: 280 } } }],
});
</script>

<template>
  <ClientOnly>
    <Card class="col-span-full md:col-span-6 xl:col-span-4">
      <CardTitle class="mb-2 text-center xl:mb-8">Support Tracker</CardTitle>
      <VueApexCharts
        type="donut"
        :options="chartOptions"
        :series="series"
        height="350"
      />
    </Card>

    <template #fallback>
      <Card class="p-5 col-span-full md:col-span-6 xl:col-span-4">
        <CardTitle class="text-center xl:mb-5">Support Tracker</CardTitle>

        <div class="mt-10">
          <div
            class="w-full rounded-md h-[340px] bg-skeleton animate-pulse"
          ></div>
        </div>
      </Card>
    </template>
  </ClientOnly>
</template>
