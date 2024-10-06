<script setup lang="ts">
// import VueApexCharts from "vue3-apexcharts";
// SHADCN COMPONENTS
// import { Card, CardContent } from "~/components/ui/card";
// CUSTOM COMPOSABLE
// import { useApexChartOptions } from "~/hooks/useApexChartOptions";

// const chartOptions = useApexChartOptions({
//   labels: ["Progress"],
//   fill: { type: "solid", colors: ["#2499EF"] },
//   stroke: { lineCap: "round", curve: "smooth" },
//   chart: { offsetY: -20, type: "radialBar", sparkline: { enabled: true } },
//   plotOptions: {
//     radialBar: {
//       endAngle: 92,
//       startAngle: -90,
//       track: { margin: 14, strokeWidth: "97%", background: "#E5F3FD" },
//       dataLabels: {
//         show: true,
//         name: {
//           offsetY: 10,
//           fontWeight: 500,
//           color: "#738499",
//           fontSize: "16px",
//         },
//         value: { offsetY: -30, fontWeight: 600, fontSize: "18px" },
//       },
//     },
//   },
// });
</script>

<template>
  <Card class="overflow-hidden col-span-full xl:col-span-7 2xl:col-span-8">
    <CardContent
      class="flex flex-col-reverse items-center justify-between h-full gap-4 px-6 py-6 text-center sm:flex-row sm:text-left sm:py-2"
    >
      <div class="flex-1">
        <h5 class="mb-2 title-3">Welcome Back! Watson</h5>
        <p class="text-muted md:max-w-80">
          You have completed
          <span class="text-base font-medium text-primary">76%</span>
          of your goal this week! Start a new goal and improve your result.
        </p>
      </div>

      <div class="2xl:w-3/12 xl:w-5/12 lg:w-4/12">
        <!-- <VueApexCharts
          :height="240"
          type="radialBar"
          :options="chartOptions"
          :series="[76]"
        /> -->
      </div>
    </CardContent>
  </Card>
</template>
