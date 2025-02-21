import { onMounted, ref, watch } from "vue";
// import { useDark } from "@vueuse/core";
import merge from "lodash/merge";
import type { ApexOptions } from "apexcharts";

// DEFAULT & COMMON APEX CHART OPTIONS
const baseOptions = {
  theme: { mode: "light" },
  dataLabels: { enabled: false },
  grid: {
    show: false,
    strokeDashArray: 3,
    borderColor: "#f3f4f6",
  },
  chart: {
    foreColor: "#1f2937",
    toolbar: { show: false },
    zoom: { enabled: false },
    background: "rgba(0, 0, 0, 0)",
    fontFamily: "Inter, sans-serif",
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
  plotOptions: {
    radialBar: {
      track: { background: "#f3f4f6" },
    },
  },
};

const DARK_FORE_COLOR = "#fff";
const DARK_STROKE_COLOR = "#111827";
const DARK_BORDER_COLOR = "#262b4260";
const DARK_CROSS_HAIRS_COLOR = "#262b42";

export const useApexChartOptions = (options: ApexOptions = {}) => {
  const isDark = useDark();
  const chartOptions = ref<ApexOptions>(merge({}, baseOptions, options));

  const updateColors = () => {
    chartOptions.value = {
      ...chartOptions.value,
      theme: {
        ...chartOptions.value.theme,
        mode: "dark",
      },
      chart: {
        ...chartOptions.value.chart,
        foreColor: DARK_FORE_COLOR,
      },
      grid: {
        ...chartOptions.value.grid,
        borderColor: DARK_BORDER_COLOR,
      },
      markers: {
        ...chartOptions.value.markers,
        strokeColors: DARK_STROKE_COLOR,
      },
      xaxis: {
        ...chartOptions.value.xaxis,
        crosshairs: {
          ...chartOptions.value.xaxis?.crosshairs,
          stroke: {
            ...chartOptions.value.xaxis?.crosshairs?.stroke,
            color: DARK_CROSS_HAIRS_COLOR,
          },
        },
      },
      // UPDATE RADIAL BAR TRACK COLOR
      plotOptions: {
        ...chartOptions.value.plotOptions,
        radialBar: {
          ...chartOptions.value.plotOptions?.radialBar,
          track: {
            ...chartOptions.value.plotOptions?.radialBar?.track,
            background: DARK_BORDER_COLOR,
          },
        },
      },
    };
  };

  // onMounted(() => {
  //   if (isDark.value) {
  //     updateColors();
  //   }
  // });

  // watch(
  //   isDark,
  //   (newValue) => {
  //     if (newValue) {
  //       updateColors();
  //     } else {
  //       chartOptions.value = merge({}, baseOptions, options);
  //     }
  //   },
  //   { immediate: true }
  // );

  return chartOptions;
};
