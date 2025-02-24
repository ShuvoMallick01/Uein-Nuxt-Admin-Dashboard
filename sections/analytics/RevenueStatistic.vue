<script setup lang="ts">
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";
// CUSTOM COMPOSABLE
import { useApexChartOptions } from "~/composables/useApexChartOptions";

const series = ref([
  {
    name: "Revenue",
    data: [
      10000, 20000, 40000, 30000, 50000, 70000, 50000, 40000, 30000, 50000,
      70000, 50000,
    ],
  },
]);

const chartOptions = useApexChartOptions({
  colors: ["#2940D3"],
  grid: { show: true },
  stroke: { curve: "smooth", width: 2 },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    labels: {
      style: {
        colors: "#738499",
        fontSize: "12px",
        fontWeight: 500,
      },
    },
    axisBorder: { show: false },
    axisTicks: { show: false },
    tooltip: { enabled: false },
  },
  yaxis: {
    min: 1000,
    max: 80000,
    show: true,
    tickAmount: 4,
    labels: {
      formatter: (value) => Math.round(value / 1000) + "k",
      style: { fontSize: "12px", fontWeight: 500, colors: "#738499" },
    },
  },

  responsive: [
    {
      breakpoint: 1050,
      options: { chart: { height: 260 } },
    },
    {
      breakpoint: 576,
      options: {
        chart: { height: 200 },
        xaxis: { labels: { show: false } },
      },
    },
  ],
});
</script>

<template>
  <ClientOnly>
    <Card class="p-0 col-span-full xl:col-span-6">
      <CardTitle class="p-5">Revenue Statistic</CardTitle>

      <VueApexCharts
        type="area"
        height="260"
        :series="series"
        :options="chartOptions"
        class="ps-1 pe-1"
      />
    </Card>

    <template #fallback>
      <Card class="p-5 col-span-full xl:col-span-6">
        <CardTitle>Revenue Statistic</CardTitle>

        <div class="mt-6">
          <div
            class="w-full rounded-md h-[250px] bg-skeleton animate-pulse"
          ></div>
        </div>
      </Card>
    </template>
  </ClientOnly>
</template>
