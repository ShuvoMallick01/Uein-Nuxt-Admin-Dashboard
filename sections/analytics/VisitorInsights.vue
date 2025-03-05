<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";
// CUSTOM COMPOSABLE
import { useApexChartOptions } from "~/composables/useApexChartOptions";

const dir = useTextDirection();
const series = ref([
  { name: "Desktop", data: [25556, 65555, 72656, 28533, 74577, 95544, 50550] },
  { name: "Tablet", data: [20556, 65555, 38566, 55833, 75477, 35544, 90505] },
  { name: "Mobile", data: [20556, 65555, 38566, 55833, 75477, 35544, 90505] },
]);

const chartOptions = ref(
  useApexChartOptions({
    colors: ["#188FDD", "#2940D3", "#D97706"],
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      stackType: "100%",
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: "20%",
        borderRadiusApplication: "end",
      },
    },
    xaxis: {
      crosshairs: { show: false },
      labels: {
        style: { colors: "#738499", fontSize: "12px", fontWeight: 500 },
      },
      categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    },
    legend: {
      show: true,
      offsetY: -5,
      fontWeight: 500,
      fontSize: "12px",
      position: "top",
      horizontalAlign: "right",
      markers: { shape: "circle", strokeWidth: 0, offsetX: -4, size: 6 },
      onItemClick: { toggleDataSeries: false },
      onItemHover: { highlightDataSeries: false },
      itemMargin: { horizontal: 12, vertical: 5 },
    },
    yaxis: {
      min: 0,
      max: 100,
      show: true,
      tickAmount: 5,
      labels: {
        formatter: (value) =>
          value > 0 ? Math.round(value / 10) + "k" : value.toString(),
        style: { fontWeight: 600, colors: "#738499", fontSize: "11px" },
      },
    },
    responsive: [
      {
        breakpoint: 1475,
        options: {
          chart: { height: 270 },
          plotOptions: { bar: { borderRadius: 4 } },
          legend: {
            offsetY: 0,
            position: "top",
            horizontalAlign: "center",
            itemMargin: { vertical: 0 },
          },
        },
      },
    ],
  })
);

watchEffect(() => {
  chartOptions.value = {
    ...chartOptions.value,
    legend: {
      ...chartOptions.value.legend,
      horizontalAlign: dir.value === "rtl" ? "left" : "right",
    },
  };
});
</script>

<template>
  <ClientOnly>
    <Card class="p-0 col-span-full md:col-span-6 xl:col-span-4">
      <CardTitle class="p-5">Visitor Insights </CardTitle>
      <VueApexCharts
        type="bar"
        height="310"
        :series="series"
        :options="chartOptions"
        class="2xl:-mt-9 ps-1"
      />
    </Card>

    <template #fallback>
      <Card class="p-5 col-span-full md:col-span-6 xl:col-span-4">
        <CardTitle>Visitor Insights</CardTitle>

        <div class="mt-6">
          <div
            class="w-full rounded-md h-[260px] bg-skeleton animate-pulse"
          ></div>
        </div>
      </Card>
    </template>
  </ClientOnly>
</template>
