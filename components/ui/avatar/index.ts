import { type VariantProps, cva } from "class-variance-authority";

export { default as Avatar } from "./Avatar.vue";
export { default as AvatarImage } from "./AvatarImage.vue";
export { default as AvatarFallback } from "./AvatarFallback.vue";

export const avatarVariant = cva(
  "inline-flex items-center justify-center font-normal text-card-foreground select-none shrink-0 bg-secondary overflow-hidden dark:bg-gray-700",
  {
    variants: {
      size: {
        xs: "h-6 w-6 text-xs",
        sm: "h-10 w-10 text-xs",
        base: "h-16 w-16 text-2xl",
        lg: "h-32 w-32 text-5xl",
      },
      shape: { circle: "rounded-full", square: "rounded-md" },
    },
  }
);

export type AvatarVariants = VariantProps<typeof avatarVariant>;