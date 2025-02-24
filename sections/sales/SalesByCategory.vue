<script setup lang="ts">
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";
// CUSTOM COMPOSABLE
import { useApexChartOptions } from "~/composables/useApexChartOptions";
// CUSTOM UTILS METHOD
import { formatK } from "~/utils/currency";

const series = ref([25, 23, 52]);

const chartOptions = useApexChartOptions({
  colors: ["#188FDD", "#2940D3", "#D97706"],
  labels: ["Fashion", "Electronics", "Grocery"],
  stroke: { width: 0, lineCap: "round", colors: ["transparent"] },
  plotOptions: {
    radialBar: {
      hollow: { margin: 20, size: "35%" },
      track: { margin: 13, background: "#f3f4f6" },
      dataLabels: {
        show: true,
        name: { offsetY: -10 },
        value: { offsetY: 5, fontSize: "22px", fontWeight: 700 },
        total: { show: true, formatter: () => formatK(21270) },
      },
    },
  },
});
</script>

<template>
  <ClientOnly>
    <Card class="p-0 col-span-full xl:col-span-4">
      <CardTitle class="p-5 text-center">Sales By Category</CardTitle>
      <VueApexCharts
        type="radialBar"
        width="100%"
        height="340"
        :series="series"
        :options="chartOptions"
      />
    </Card>

    <template #fallback>
      <Card class="p-5 col-span-full xl:col-span-4">
        <CardTitle>Sales By Category</CardTitle>

        <div class="mt-6">
          <div
            class="w-full rounded-md h-[260px] bg-skeleton animate-pulse"
          ></div>
        </div>
      </Card>
    </template>
  </ClientOnly>
</template>
