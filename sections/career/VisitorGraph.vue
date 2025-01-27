<script setup lang="ts">
import { ref, watch } from "vue";
import VueApexCharts from "vue3-apexcharts";
// SHADCN COMPONENTS
import {
  Select,
  SelectItem,
  SelectGroup,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from "~/components/ui/select";
import { Card, CardTitle } from "~/components/ui/card";
// CUSTOM COMPOSABLE
import { useApexChartOptions } from "~/composables/useApexChartOptions";

const data = {
  week: {
    categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    series: [{ name: "Visitor", data: [31, 90, 38, 61, 40, 80, 50] }],
  },
  day: {
    categories: ["12AM", "3AM", "7AM", "10PM", "2PM", "5PM", "9PM"],
    series: [{ name: "Visitor", data: [31, 45, 28, 51, 42, 60, 85] }],
  },
};

const selected = ref<"week" | "day">("week");

const chartOptions = useApexChartOptions({
  colors: ["#2940D3"],
  chart: { type: "area" },
  fill: { type: "gradient" },
  stroke: { curve: "smooth", width: 2 },
  grid: { show: true, borderColor: "#f3f4f6" },
  xaxis: {
    offsetY: 10,
    labels: { style: { colors: "#4B5563" } },
    categories: data[selected.value].categories,
    crosshairs: { stroke: { color: "#2940D3" } },
  },
  yaxis: {
    show: true,
    min: 0,
    max: 100,
    tickAmount: 4,
    labels: {
      offsetX: -12,
      formatter: (value: number) => value.toString(),
      style: { cssClass: "font-normal", colors: "#4B5563" },
    },
  },
  responsive: [
    { breakpoint: 1440, options: { chart: { height: 300 } } },
    { breakpoint: 1250, options: { chart: { height: 280 } } },
    { breakpoint: 1020, options: { chart: { height: 250 } } },
    { breakpoint: 576, options: { chart: { height: 200 } } },
  ],
});

// UPDATE CHART CATEGORIES WHEN SELECTED CHANGES
watch(selected, (value) => {
  chartOptions.value = {
    ...chartOptions.value,
    xaxis: {
      ...chartOptions.value.xaxis,
      categories: data[value].categories,
    },
  };
});
</script>

<template>
  <ClientOnly>
    <Card class="px-0 pb-2 col-span-full xl:col-span-5 2xl:col-span-4">
      <div class="flex items-start justify-between px-5 mb-2">
        <CardTitle>Visitor Graph</CardTitle>

        <Select v-model:model-value="selected">
          <SelectTrigger
            class="text-[13px] font-medium text-gray-600 w-20 h-8 border-none rounded-lg bg-active"
          >
            <SelectValue placeholder="Select a day" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="day">Day</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div class="ps-4 pe-3">
        <VueApexCharts
          type="area"
          height="280"
          :options="chartOptions"
          :series="data[selected].series"
        />
      </div>
    </Card>
  </ClientOnly>
</template>
