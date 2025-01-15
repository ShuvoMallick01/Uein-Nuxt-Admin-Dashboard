import { type VariantProps, cva } from "class-variance-authority";

export { default as Alert } from "./Alert.vue";
export { default as AlertTitle } from "./AlertTitle.vue";
export { default as AlertDescription } from "./AlertDescription.vue";

export const alertVariants = cva(
  "relative w-full rounded-lg p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        filled: "text-card-foreground bg-card",
        normal: "text-card-foreground bg-black/15",
        outline: "text-card-foreground bg-transparent outline-none",
      },

      color: {
        primary: "bg-primary/10 text-primary font-semibold text-sm",
        info: "bg-info/10 text-info font-semibold text-sm",
        error: "bg-error/10 text-error font-semibold text-sm",
        success: "bg-success/10 text-success font-semibold text-sm",
        warning: "bg-warning/10 text-warning font-semibold text-sm",
      },
    },

    compoundVariants: [
      // Filled
      { variant: "filled", color: "primary", class: "text-white bg-primary" },
      { variant: "filled", color: "info", class: "text-white bg-info" },
      { variant: "filled", color: "success", class: "text-white bg-success" },
      { variant: "filled", color: "warning", class: "text-white bg-warning" },
      { variant: "filled", color: "error", class: "text-white bg-error" },

      // Outline
      {
        variant: "outline",
        color: "primary",
        class: "bg-transparent border border-primary",
      },
      {
        variant: "outline",
        color: "info",
        class: "bg-transparent border border-info",
      },
      {
        variant: "outline",
        color: "success",
        class: "bg-transparent border border-success",
      },
      {
        variant: "outline",
        color: "warning",
        class: "bg-transparent border border-warning",
      },
      {
        variant: "outline",
        color: "error",
        class: "bg-transparent border border-error",
      },
    ],

    defaultVariants: { variant: "filled", color: "primary" },
  }
);

export type AlertVariants = VariantProps<typeof alertVariants>;
