import { ref } from "vue";
import { useApexChartOptions } from "~/composables/useApexChartOptions";

export const useChartOptions = () => {
  const series = ref([
    { name: "Organic Search", data: [20, 30, 40, 50, 40, 30, 20] },
    { name: "Referrals", data: [30, 30, 30, 30, 30, 30, 30] },
    { name: "Social Media", data: [20, 20, 20, 20, 20, 20, 20] },
  ]);

  const chartOptions = useApexChartOptions({
    yaxis: { show: false },
    chart: { type: "bar", stacked: true },
    colors: ["#2940d3", "#d4dbfc", "#f1f4fe"],

    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 5,
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
        columnWidth: "22%",
      },
    },

    legend: {
      show: true,
      offsetY: 10,
      fontWeight: 600,
      fontSize: "12px",
      position: "bottom",
      horizontalAlign: "center",
      markers: { shape: "circle", strokeWidth: 0, offsetX: -5, size: 6 },
      onItemClick: { toggleDataSeries: false },
      onItemHover: { highlightDataSeries: false },
      itemMargin: { horizontal: 12, vertical: 5 },
    },

    xaxis: {
      offsetY: 0,
      axisTicks: { show: false },
      axisBorder: { show: false },
      crosshairs: { show: false },
      categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
      labels: { style: { fontSize: "12px", fontWeight: 500 } },
    },

    responsive: [
      {
        breakpoint: 1600,
        options: { plotOptions: { bar: { borderRadius: 5 } } },
      },
      {
        breakpoint: 1450,
        options: {
          chart: { height: 340 },
          plotOptions: {
            bar: { borderRadius: 6, columnWidth: "18%" },
          },
        },
      },
      {
        breakpoint: 1025,
        options: {
          chart: { height: 340 },
          plotOptions: {
            bar: { borderRadius: 6, columnWidth: "28%" },
          },
        },
      },
      {
        breakpoint: 575,
        options: {
          chart: { height: 300 },
          plotOptions: { bar: { borderRadius: 6 } },
        },
      },
      {
        breakpoint: 376,
        options: {
          plotOptions: { bar: { borderRadius: 4 } },
        },
      },
    ],
  });

  return { chartOptions, series };
};
