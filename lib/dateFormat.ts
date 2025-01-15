import { useDateFormat } from "@vueuse/core";

export function dateFormat(date: Date | string, formatString = "DD MMM YYYY") {
  const formatted = useDateFormat(new Date(date), formatString);
  return formatted.value;
}
