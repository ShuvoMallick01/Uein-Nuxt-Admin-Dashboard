<script setup lang="ts">
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";
// CUSTOM COMPOSABLE
import { useApexChartOptions } from "~/composables/useApexChartOptions";

const series = ref([30, 25, 30, 25]);

const chartOptions = useApexChartOptions({
  labels: ["Sent", "Answered", "Hired", "Pending"],
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
  responsive: [
    { breakpoint: 2000, options: { chart: { width: 390 } } },
    { breakpoint: 1300, options: { chart: { width: 360 } } },
    { breakpoint: 1100, options: { chart: { width: 300 } } },
    { breakpoint: 1000, options: { chart: { width: 300 } } },
  ],
});
</script>

<template>
  <ClientOnly>
    <Card class="col-span-full xl:col-span-4">
      <CardTitle class="mb-2 text-center xl:mb-5">Profile Strength</CardTitle>
      <VueApexCharts
        type="polarArea"
        height="300"
        :options="chartOptions"
        :series="series"
      />
    </Card>

    <template #fallback>
      <Card class="p-5 col-span-full xl:col-span-4">
        <CardTitle>Profile Strength</CardTitle>

        <div class="mt-6">
          <div
            class="w-full rounded-md h-[300px] bg-skeleton animate-pulse"
          ></div>
        </div>
      </Card>
    </template>
  </ClientOnly>
</template>
