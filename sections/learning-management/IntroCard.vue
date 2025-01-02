<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";

const chartOptions = useApexChartOptions({
  labels: ["Progress"],
  fill: { type: "solid", colors: ["#2499EF"] },
  stroke: { lineCap: "round", curve: "smooth" },
  chart: { offsetY: -20, type: "radialBar", sparkline: { enabled: true } },

  plotOptions: {
    radialBar: {
      endAngle: 92,
      startAngle: -90,
      track: { margin: 14, strokeWidth: "97%", background: "#E5F3FD" },
      dataLabels: {
        show: true,
        name: {
          offsetY: 10,
          fontWeight: 500,
          color: "#738499",
          fontSize: "16px",
        },
        value: { offsetY: -30, fontWeight: 600, fontSize: "18px" },
      },
    },
  },
});
</script>

<template>
  <ClientOnly>
    <Card class="overflow-hidden col-span-full 2xl:col-span-8 xl:col-span-7">
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
          <VueApexCharts
            :height="240"
            type="radialBar"
            :options="chartOptions"
            :series="[76]"
          />
        </div>
      </CardContent>
    </Card>
  </ClientOnly>

  <div
    class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
  >
    <div class="md:flex">
      <div class="md:shrink-0">
        <img
          class="h-48 w-full object-cover md:h-full md:w-48"
          src="/img/building.jpg"
          alt="Modern building architecture"
        />
      </div>
      <div class="p-8">
        <div
          class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
        >
          Company retreats
        </div>
        <a
          href="#"
          class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >Incredible accommodation for your team</a
        >
        <p class="mt-2 text-slate-500">
          Looking to take your team away on a retreat to enjoy awesome food and
          take in some sunshine? We have a list of places to do just that.
        </p>
      </div>
    </div>
  </div>
</template>
