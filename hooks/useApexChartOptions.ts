import { onMounted, ref, watch } from "vue";
import { useDark } from "@vueuse/core";
import merge from "lodash/merge";
import type { ApexOptions } from "apexcharts";

// DEFAULT & COMMON APEX CHART OPTIONS
const baseOptions = {
  theme: { mode: "light" },
  dataLabels: { enabled: false },
  grid: {
    show: false,
    strokeDashArray: 3,
    borderColor: "#E9EFF6",
  },
  chart: {
    foreColor: "#011E3D",
    toolbar: { show: false },
    background: "rgba(0, 0, 0, 0)",
    fontFamily: "Montserrat, sans-serif",
  },
  states: {
    active: { filter: { type: "none" } },
    hover: { filter: { type: "none" } },
  },
  xaxis: {
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  markers: { strokeWidth: 5 },
};

export const useApexChartOptions = (options: ApexOptions = {}) => {
  const isDark = useDark();
  const chartOptions = ref(merge({}, baseOptions, options));

  onMounted(() => {
    if (isDark.value) {
      chartOptions.value.theme.mode = "dark";
      chartOptions.value.chart.foreColor = "#fff";
      chartOptions.value.grid.borderColor = "#374151";
    }
  });

  watch(isDark, (newValue) => {
    if (newValue) {
      chartOptions.value = {
        ...chartOptions.value,
        theme: { mode: "dark" },
        chart: { ...chartOptions.value.chart, foreColor: "#fff" },
        grid: { ...chartOptions.value.grid, borderColor: "#374151" },
      };
    } else {
      chartOptions.value = merge({}, baseOptions, options);
    }
  });

  return chartOptions;
};
