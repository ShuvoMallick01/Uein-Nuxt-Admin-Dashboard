<script setup lang="ts">
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";
// CUSTOM COMPOSABLE
import { useApexChartOptions } from "~/composables/useApexChartOptions";
// SHADCN COMPONENTS
import {
  Select,
  SelectItem,
  SelectGroup,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from "~/components/ui/select";
import { Card } from "~/components/ui/card";

const selected = ref("0");
const series = ref([
  { name: "Income", data: [20000, 6000, 38800, 18000, 37000, 23000, 39000] },
  { name: "Expenses", data: [34000, 10000, 36000, 10000, 13000, 28000, 10000] },
]);

const chartOptions = useApexChartOptions({
  colors: ["#14B85A", "#B45309"],
  stroke: { curve: "smooth", width: 3 },
  grid: { show: true, borderColor: "#F3F4F6" },
  fill: { type: "gradient" },

  legend: {
    show: true,
    offsetY: 0,
    fontWeight: 600,
    fontSize: "12px",
    position: "top",
    horizontalAlign: "center",
    itemMargin: { horizontal: 15, vertical: 0 },
    markers: { offsetX: -2, size: 6 },
  },

  xaxis: {
    type: "datetime",
    categories: [
      "01/01/2011 GMT",
      "01/02/2011 GMT",
      "01/03/2011 GMT",
      "01/04/2011 GMT",
      "01/05/2011 GMT",
      "01/06/2011 GMT",
      "01/07/2011 GMT",
    ],

    labels: {
      format: "ddd",
      style: { colors: "#4B5563", fontSize: "12px", fontWeight: 500 },
    },

    axisBorder: { show: false },
    axisTicks: { show: false },
  },

  yaxis: {
    min: 0,
    max: 40000,
    stepSize: 10000,
    labels: {
      offsetX: -5,
      style: {
        fontWeight: 500,
        colors: "#4B5563",
        fontSize: "12px",
      },
      formatter: (value) => (value > 0 ? `${value / 1000}k` : `${value}`),
    },
  },

  responsive: [
    { breakpoint: 1450, options: { chart: { height: 280 } } },
    { breakpoint: 1280, options: { chart: { height: 280 } } },

    {
      breakpoint: 780,
      options: {
        chart: { height: 300 },
        legend: {
          itemMargin: { vertical: 20 },
        },
      },
    },
    { breakpoint: 575, options: { chart: { height: 300 } } },
  ],
});
</script>

<template>
  <ClientOnly>
    <Card class="px-0 pt-5 pb-0 col-span-full xl:col-span-8">
      <div class="flex items-start justify-between px-5">
        <p class="text-base font-semibold">Sales Overview</p>

        <Select v-model:model-value="selected">
          <SelectTrigger
            class="text-[13px] font-medium text-gray-600 w-20 h-8 border-none rounded-lg bg-active"
          >
            <SelectValue placeholder="Select a day" />
          </SelectTrigger>

          <SelectContent class="text-[13px] font-medium text-gray-600">
            <SelectGroup>
              <SelectItem value="0">Week</SelectItem>
              <SelectItem value="1">Month</SelectItem>
              <SelectItem value="2">Year</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <VueApexCharts
        type="area"
        height="330"
        :options="chartOptions"
        :series="series"
        class="ps-2 pe-3"
      />
    </Card>

    <template #fallback>
      <Card class="p-5 col-span-full xl:col-span-8">
        <CardTitle>Sales Overview</CardTitle>

        <div class="mt-6">
          <div
            class="w-full rounded-md h-[260px] bg-skeleton animate-pulse"
          ></div>
        </div>
      </Card>
    </template>
  </ClientOnly>
</template>
