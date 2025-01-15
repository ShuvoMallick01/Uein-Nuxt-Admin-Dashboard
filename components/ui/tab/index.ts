import { type VariantProps, cva } from "class-variance-authority";
export { default as Tab } from "./Tab.vue";

export const tabVariants = cva(
  "text-sm font-medium text-muted rounded-t-lg  leading-normal transition-300 inline-block",
  {
    variants: {
      variant: {
        normal:
          "text-muted-300 py-[8px] border-b-2 border-b-transparent hover:border-b hover:border-b-2 hover:border-b-gray-500 dark:text-white dark:border-b-transparent dark:hover:border-b-white",
        button:
          "text-muted-300  py-[8px] px-[12px]  border-transparent hover:bg-dark/15 hover:text-black dark:text-white dark:hover:text-primary dark:hover:bg-dark/15",
      },

      color: {
        primary:
          "text-muted  hover:text-primary border-b-2  border-b-transparent hover:border-b-2  hover:border-b-primary dark:text-white dark:hover:text-primary dark:border-b-transparent dark:hover:border-b-primary",
        info: "text-muted  hover:text-info border-b-2  border-b-transparent hover:border-b-2  hover:border-b-info dark:text-white dark:hover:text-info dark:border-b-transparent dark:hover:border-b-info",
        success:
          "text-muted  hover:text-success border-b-2  border-b-transparent hover:border-b-2  hover:border-b-success dark:text-white dark:hover:text-success dark:border-b-transparent dark:hover:border-b-success",
        warning:
          "text-muted  hover:text-warning border-b-2  border-b-transparent hover:border-b-2  hover:border-b-warning dark:text-white dark:hover:text-warning dark:border-b-transparent dark:hover:border-b-warning",
        error:
          "text-muted  hover:text-error border-b-2  border-b-transparent hover:border-b-2  hover:border-b-error dark:text-white dark:hover:text-error dark:border-b-transparent dark:hover:border-b-error",
      },
    },

    compoundVariants: [
      {
        variant: "button",
        color: "primary",
        class:
          "text-muted border-b-transparent hover:bg-primary/15 hover:border-transparent hover:text-primary dark:text-white dark:hover:text-primary dark:hover:bg-primary/15 ",
      },
      {
        variant: "button",
        color: "info",
        class:
          "text-muted border-b-transparent hover:bg-info/15 hover:border-transparent hover:text-info dark:text-white dark:hover:text-info dark:hover:bg-info/15 ",
      },
      {
        variant: "button",
        color: "success",
        class:
          "text-muted border-b-transparent hover:bg-success/15 hover:border-transparent hover:text-success dark:text-white dark:hover:text-success dark:hover:bg-success/15 ",
      },
      {
        variant: "button",
        color: "warning",
        class:
          "text-muted border-b-transparent hover:bg-warning/15 hover:border-transparent hover:text-warning dark:text-white dark:hover:text-warning dark:hover:bg-warning/15 ",
      },
    ],

    defaultVariants: {
      variant: "normal",
      color: "primary",
    },
  }
);

export type TabVariants = VariantProps<typeof tabVariants>;
