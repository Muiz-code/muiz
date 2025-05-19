import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center white-space-nowrap rounded-full text-base font-semibold transition-colors cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-chart-2 text-white shadow-xs hover:bg-chart-2/30",
        primary: "bg-primary text-white ",
        outline:
          "border border-chart-2 text-chart-2 bg-transparent hover:bg-chart-2/10 hover:text-chart-2",
      },

      size: {
        default: "h-[44px] px-8",
        sm: "h-[48px] px-6",
        lg: "h-[56px] px-5 text-sm uppercase tracking-[2px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
