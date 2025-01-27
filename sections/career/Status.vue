<script setup lang="ts">
import { Icon } from "@iconify/vue";
import VueApexCharts from "vue3-apexcharts";
// SHADCN COMPONENT
import { Card } from "~/components/ui/card";
// CUSTOM COMPOSABLE
import { useApexChartOptions } from "~/composables/useApexChartOptions";
// CUSTOM DATA
import { stats } from "~/data/dashboards/career";

const chartOptions = useApexChartOptions({
  colors: ["#2940D3"],
  legend: { show: false },
  tooltip: { enabled: false },
  stroke: { curve: "smooth", lineCap: "round" },
  plotOptions: {
    radialBar: {
      hollow: { size: "53%" },
      track: { strokeWidth: "100%", background: "#F1F4FE" },
      dataLabels: {
        name: { show: false },
        value: {
          offsetY: 5,
          fontSize: "14px",
          fontWeight: 600,
          formatter: (value) => value + "%",
        },
      },
    },
  },
});
</script>

<template>
  <ClientOnly>
    <Card
      v-for="item in stats"
      :key="item.id"
      class="flex items-center justify-between h-full gap-4 p-0 py-2 ps-5 xl:gap-1 col-span-full sm:col-span-6 xl:col-span-3"
    >
      <div class="truncate">
        <p class="text-sm leading-none text-gray-500 truncate">
          {{ item.title }}
        </p>

        <h5 class="font-semibold leading-loose">
          {{ item.amount }}
        </h5>

        <div class="flex items-center gap-2 mt-3">
          <div
            class="grid w-5 h-5 rounded-md place-items-center shrink-0"
            :class="{
              'text-error bg-error-50 dark:bg-error/10': item.increment < 0,
              'text-primary bg-primary-50 dark:bg-primary/10':
                item.increment > 0,
            }"
          >
            <Icon
              height="12"
              :icon="
                item.increment > 0
                  ? 'iconamoon:trend-up'
                  : 'iconamoon:trend-down'
              "
            />
          </div>

          <p class="text-xs font-medium text-gray-600 truncate">
            {{ item.increment > 0 ? `+${item.increment}` : item.increment }}%
            Increased
          </p>
        </div>
      </div>

      <VueApexCharts
        width="110"
        height="110"
        type="radialBar"
        :series="[item.percent]"
        :options="chartOptions"
      />
    </Card>
  </ClientOnly>
</template>
