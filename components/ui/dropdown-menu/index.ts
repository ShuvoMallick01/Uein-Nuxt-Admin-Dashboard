export { DropdownMenuPortal } from "radix-vue";

export { default as DropdownMenu } from "./DropdownMenu.vue";
export { default as DropdownMenuTrigger } from "./DropdownMenuTrigger.vue";
export { default as DropdownMenuContent } from "./DropdownMenuContent.vue";
export { default as DropdownMenuGroup } from "./DropdownMenuGroup.vue";
export { default as DropdownMenuRadioGroup } from "./DropdownMenuRadioGroup.vue";
export { default as DropdownMenuItem } from "./DropdownMenuItem.vue";
export { default as DropdownMenuCheckboxItem } from "./DropdownMenuCheckboxItem.vue";
export { default as DropdownMenuRadioItem } from "./DropdownMenuRadioItem.vue";
export { default as DropdownMenuShortcut } from "./DropdownMenuShortcut.vue";
export { default as DropdownMenuSeparator } from "./DropdownMenuSeparator.vue";
export { default as DropdownMenuLabel } from "./DropdownMenuLabel.vue";
export { default as DropdownMenuSub } from "./DropdownMenuSub.vue";
export { default as DropdownMenuSubTrigger } from "./DropdownMenuSubTrigger.vue";
export { default as DropdownMenuSubContent } from "./DropdownMenuSubContent.vue";

// Custom Code
import { type VariantProps, cva } from "class-variance-authority";

// const props = defineProps({
//   dropdownList: { type: Array, default: [] },
//   variant: { type: String },
//   color: { type: String },
//   shape: { type: String },
// });

// const showDropdown = ref(false);
// const toggleDropdown = () => {
//   showDropdown.value = !showDropdown.value;
// };

// Button Class
export const buttonVariants = cva(
  [
    " py-[10px] px-[24px] inline-flex items-center justify-center leading-normal rounded text-sm font-semibold transition-all duration-300 ease-in-out ",
  ],
  {
    variants: {
      variant: {
        filled:
          "text-white  bg-black text-center focus:outline-none outline-none",
        outline:
          "text-black bg-transparent   text-center border outline-none focus:outline-none border-black dark:text-white dark:border-white",
        translucent:
          " text-gray-400  bg-black/10 text-center focus:outline-none outline-none",
      },

      color: {
        primary: "text-white bg-primary hover:bg-primary-darker ",
        secondary: "text-text-400 bg-secondary hover:bg-secondary-darker ",
        info: "bg-info hover:bg-info-darker",
        success: "bg-success hover:bg-success-darker",
        warning: "bg-warning hover:bg-warning-darker",
        error: "bg-error hover:bg-error-darker",
      },
      shape: {
        rounded: "rounded",
        pill: "rounded-full",
      },
    },

    compoundVariants: [
      {
        variant: "outline",
        color: "primary",
        class:
          "text-primary bg-transparent border-primary outline-none hover:bg-gray-100 dark:border-primary dark:text-primary",
      },
      {
        variant: "outline",
        color: "secondary",
        class:
          "text-text-400 bg-transparent border-text-400 outline-none hover:text-white hover:bg-text-400 dark:hover:bg-gray-100 dark:bg-dark-bgSecondary dark:hover:bg-dark-bgHover ",
      },
      {
        variant: "outline",
        color: "info",
        class:
          "text-info bg-transparent border-info outline-none hover:text-white hover:bg-info dark:border-info dark:text-info dark:hover:text-white dark:hover:border-info",
      },
      {
        variant: "outline",
        color: "success",
        class:
          "text-success bg-transparent border-success outline-none hover:text-white hover:bg-success dark:border-success dark:text-success dark:hover:text-white dark:hover:border-success",
      },
      {
        variant: "outline",
        color: "warning",
        class:
          "text-warning bg-transparent border-warning outline-none hover:text-white hover:bg-warning dark:border-warning dark:text-warning dark:hover:text-white dark:hover:border-warning",
      },
      {
        variant: "outline",
        color: "error",
        class:
          "text-error bg-transparent border-error outline-none hover:text-white hover:bg-error dark:border-error dark:text-error dark:hover:text-white dark:hover:border-error",
      },

      // Translucent Buttons
      // Translucent Buttons
      {
        variant: "translucent",
        color: "primary",
        class:
          "text-primary bg-primary/15 border-transparent hover:text-primary-darker hover:bg-primary/40 dark:text-primary",
      },
      {
        variant: "translucent",
        color: "secondary",
        class:
          "text-slate-400 bg-secondary border-transparent hover:text-black hover:bg-text-400/20  dark:text-gray-600-500 dark:hover:bg-white dark:hover:text-gray-600-500",
      },
      {
        variant: "translucent",
        color: "info",
        class:
          "text-info bg-info/15 border-transparent hover:text-info-darker hover:bg-info/40 dark:hover:text-info",
      },
      {
        variant: "translucent",
        color: "success",
        class:
          "text-success bg-success/15 border-transparent hover:text-success-darker hover:bg-success/40 dark:hover:text-success",
      },
      {
        variant: "translucent",
        color: "warning",
        class:
          "text-warning bg-warning/15 border-transparent hover:text-warning-darker hover:bg-warning/40 dark:hover:text-warning",
      },
      {
        variant: "translucent",
        color: "error",
        class:
          "text-error bg-error/15 border-transparent hover:text-error-darker hover:bg-error/40 dark:hover:text-error",
      },
    ],

    defaultVariants: {
      variant: "filled",
      color: "primary",
      shape: "rounded",
    },
  }
);

// === OPTION CLASS ===
export const optionVariants = cva(
  [
    "text-xs px-3 py-2 leading-normal transition-all duration-300 ease-in-out block",
  ],
  {
    variants: {
      variant: {
        filled:
          "hover:bg-black text-white hover:text-white dark:hover:bg-white dark:hover:text-black",
        outline:
          "text-black bg-white outline-none  border-muted-300  focus:outline-none dark:text-white dark:border-white",
        translucent:
          " text-gray-400  bg-black/10  focus:outline-none outline-none",
      },

      color: {
        primary:
          "bg-primary text-white hover:bg-primary-darker dark:hover:bg-gray-600 dark:hover:text-white ",
        secondary:
          "bg-secondary  text-text-400 bg-secondary hover:bg-secondary-darker",
        info: "bg-info  hover:bg-info-darker",
        success: "bg-success  hover:bg-success-darker",
        warning: "bg-warning  hover:bg-warning-darker",
        error: "bg-error hover:bg-error-darker",
      },
    },

    compoundVariants: [
      // Primary Button
      {
        variant: "outline",
        color: "primary",
        class:
          "text-muted-300 hover:text-primary bg-transparent border-primary outline-none hover:bg-gray-100 dark:bg-dark-bgSecondary dark:hover:bg-dark-bgHover dark:border-primary dark:text-white dark:hover:text-primary",
      },
      {
        variant: "outline",
        color: "secondary",
        class:
          "text-text-400 bg-transparent border-text-400 outline-none hover:text-white hover:!bg-dark dark:hover:bg-gray-100 dark:bg-dark-bgSecondary dark:hover:bg-dark-bgHover ",
      },
      {
        variant: "outline",
        color: "info",
        class:
          "text-muted-300 hover:text-info bg-transparent border-info outline-none hover:bg-gray-100 dark:hover:bg-gray-100 dark:border-info dark-bgSecondary dark:text-white dark:hover:text-info",
      },
      {
        variant: "outline",
        color: "success",
        class:
          "text-muted-300 hover:text-success bg-transparent border-success outline-none hover:bg-gray-100 dark:hover:bg-gray-600 dark-bgSecondary dark:border-success dark:text-white dark:hover:text-success",
      },
      {
        variant: "outline",
        color: "warning",
        class:
          "text-warning bg-transparent border-warning outline-none hover:text-white hover:bg-warning dark:border-warning dark:text-warning dark-bgSecondary dark:hover:text-white dark:hover:border-warning",
      },
      {
        variant: "outline",
        color: "error",
        class:
          "text-error bg-transparent border-error outline-none hover:text-white hover:bg-error dark:border-error dark:text-error dark:hover:text-white dark:hover:border-error",
      },

      // Translucent Buttons
      {
        variant: "translucent",
        color: "primary",
        class:
          "text-primary bg-primary/15 border-transparent hover:text-primary-darker hover:bg-primary/40 dark:text-primary",
      },
      {
        variant: "translucent",
        color: "secondary",
        class:
          "text-slate-400 bg-secondary border-transparent hover:text-black hover:bg-text-400/20  dark:text-gray-600-500 dark:hover:bg-white dark:hover:text-gray-600-500",
      },
      {
        variant: "translucent",
        color: "info",
        class:
          "text-info bg-info/15 border-transparent hover:text-info-darker hover:bg-info/40 dark:hover:text-info",
      },
      {
        variant: "translucent",
        color: "success",
        class:
          "text-success bg-success/15 border-transparent hover:text-success-darker hover:bg-success/40 dark:hover:text-success",
      },
      {
        variant: "translucent",
        color: "warning",
        class:
          "text-warning bg-warning/15 border-transparent hover:text-warning-darker hover:bg-warning/40 dark:hover:text-warning",
      },
      {
        variant: "translucent",
        color: "error",
        class:
          "text-error bg-error/15 border-transparent hover:text-error-darker hover:bg-error/40 dark:hover:text-error",
      },
    ],

    defaultVariants: {
      variant: "filled",
      color: "primary",
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
export type OptionVariants = VariantProps<typeof optionVariants>;
