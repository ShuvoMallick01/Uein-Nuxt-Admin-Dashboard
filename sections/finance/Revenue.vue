<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";
// CUSTOM COMPOSABLE
import { useApexChartOptions } from "~/composables/useApexChartOptions";

const data = {
  week: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    series: [
      {
        name: "Revenue",
        data: [10000, 20000, 40000, 30000, 50000, 70000, 50000],
      },
    ],
  },
  month: {
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
    series: [
      {
        name: "Revenue",
        data: [
          10000, 20000, 40000, 30000, 50000, 70000, 50000, 40000, 30000, 50000,
          70000, 50000,
        ],
      },
    ],
  },
  year: {
    categories: [
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
      "2024",
    ],
    series: [
      {
        name: "Revenue",
        data: [
          10000, 20000, 40000, 30000, 50000, 70000, 50000, 40000, 30000, 50000,
          70000, 50000,
        ],
      },
    ],
  },
};

const selected = ref<"week" | "month" | "year">("month");

const chartOptions = useApexChartOptions({
  colors: ["#2940D3"],
  grid: { show: true },
  stroke: { curve: "smooth", width: 2 },
  xaxis: {
    axisTicks: { show: false },
    axisBorder: { show: false },
    tooltip: { enabled: false },
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
  },
  yaxis: {
    min: 0,
    max: 80000,
    show: true,
    stepSize: 16000,
    labels: {
      formatter: (value) => (value / 1000).toFixed(0) + "k",
      style: { fontSize: "12px", fontWeight: 500, colors: "#738499" },
    },
  },
  responsive: [
    {
      breakpoint: 576,
      options: { xaxis: { labels: { show: false } } },
    },
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
    <Card class="px-0 pt-5 pb-0 col-span-full xl:col-span-6">
      <div class="flex items-start justify-between px-5">
        <p class="text-base font-semibold">Revenue</p>

        <Select v-model:model-value="selected">
          <SelectTrigger
            class="text-[13px] font-medium text-gray-600 w-20 h-8 border-none rounded-lg bg-active"
          >
            <SelectValue placeholder="Select a day" />
          </SelectTrigger>

          <SelectContent class="text-[13px] font-medium text-gray-600">
            <SelectGroup>
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="month">Month</SelectItem>
              <SelectItem value="year">Year</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <VueApexCharts
        type="area"
        height="330"
        :options="chartOptions"
        :series="data[selected].series"
        class="ps-1 pe-1"
      />
    </Card>

    <template #fallback>
      <Card class="p-5 col-span-full xl:col-span-6">
        <div class="flex items-start justify-between px-5">
          <p class="text-base font-semibold">Revenue</p>

          <Select v-model:model-value="selected">
            <SelectTrigger
              class="text-[13px] font-medium text-gray-600 w-20 h-8 border-none rounded-lg bg-active"
            >
              <SelectValue placeholder="Select a day" />
            </SelectTrigger>

            <SelectContent class="text-[13px] font-medium text-gray-600">
              <SelectGroup>
                <SelectItem value="week">Week</SelectItem>
                <SelectItem value="month">Month</SelectItem>
                <SelectItem value="year">Year</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div class="mt-6">
          <div
            class="w-full rounded-md h-[280px] bg-skeleton animate-pulse"
          ></div>
        </div>
      </Card>
    </template>
  </ClientOnly>
</template>
