<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";
// CUSTOM COMPOSABLE
import { useApexChartOptions } from "~/composables/useApexChartOptions";

const data = {
  week: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    series: [
      { name: "2024", data: [34000, 10000, 36000, 10000, 13000, 28000, 10000] },
      {
        name: "2023",
        data: [-20000, -6000, -38800, -18000, -37000, -23000, -39000],
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
        name: "2024",
        data: [
          40000, 60000, 40000, 30000, 50000, 70000, 50000, 40000, 30000, 50000,
          70000, 50000,
        ],
      },
      {
        name: "2023",
        data: [
          -40000, -60000, -30000, -20000, -40000, -60000, -40000, -30000,
          -20000, -40000, -60000, -40000,
        ],
      },
    ],
  },
};

const selected = ref<"week" | "month">("month");

const chartOptions = useApexChartOptions({
  grid: { show: true },
  legend: { show: false },
  chart: { stacked: true },
  colors: ["#2940D3", "#e11d48"],
  plotOptions: { bar: { columnWidth: "30%", borderRadius: 7 } },
  yaxis: {
    min: -80000,
    max: 80000,
    show: true,
    tickAmount: 6,
    labels: {
      formatter: (value) => Math.round(value / 1000) + "k",
      style: { fontSize: "12px", fontWeight: 500, colors: "#738499" },
    },
  },
  xaxis: {
    categories: data[selected.value].categories,
    axisBorder: { show: false },
    axisTicks: { show: false },
    tooltip: { enabled: false },
    labels: {
      style: { colors: "#738499", fontSize: "12px", fontWeight: 500 },
    },
  },
  responsive: [
    {
      breakpoint: 576,
      options: { plotOptions: { bar: { borderRadius: 4 } } },
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
        <p class="text-base font-semibold">Expenses</p>

        <Select v-model:model-value="selected">
          <SelectTrigger
            class="w-20 h-8 text-[13px] font-medium text-gray-600 border-none rounded-lg bg-active"
          >
            <SelectValue placeholder="Select a day" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="month">Month</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <VueApexCharts
        type="bar"
        height="330"
        :options="chartOptions"
        :series="data[selected].series"
        class="ps-1 pe-1"
      />
    </Card>

    <template #fallback>
      <Card class="p-5 pt-5 pb-0 col-span-full xl:col-span-6">
        <div class="flex items-start justify-between px-5">
          <p class="text-base font-semibold">Expenses</p>

          <Select v-model:model-value="selected">
            <SelectTrigger
              class="w-20 h-8 text-[13px] font-medium text-gray-600 border-none rounded-lg bg-active"
            >
              <SelectValue placeholder="Select a day" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectItem value="week">Week</SelectItem>
                <SelectItem value="month">Month</SelectItem>
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
