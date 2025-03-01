import { ButtonHTMLAttributes, FC, forwardRef } from "react"
import { cn } from "../utils/utils";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva('rounded-lg font-bold uppercase text-white px-6 py-2 cursor-pointer', {
  variants: {
      variant: {
          default: 'bg-indigo-600 text-white hover:bg-indigo-800',
          primary: 'bg-blue-500 text-white hover:bg-blue-700',
          success: 'bg-green-600 text-white hover:bg-green-700/80',
          warning: 'bg-orange-400 text-white hover:bg-orange-600',
          danger: 'bg-red-600 text-white hover:bg-red-700/80'
      },
      outline: {
        true: 'border bg-none border-indigo-600 text- bg-trasnparent hover:bg-indigo-300 hover:text-white'
      },
      rounded: {
          basic: 'rounded-none',
          sm: 'rounded-sm',
          md: 'rounded-md',
          lg: 'rounded-lg',
          full: 'rounded-full',
      },
      size: {
          sm: 'py-2 px-4 text-sm',
          md: 'py-2 px-6 text-md',
          lg: 'py-3 px-8 text-lg',
          full: 'py-4 px-8 text-lg w-full'
      }
  },
  compoundVariants: [
    { variant: 'primary', outline: true, className: 'border-blue-500 hover:bg-blue-500' },
    { variant: 'success', outline: true, className: 'border-green-600 hover:bg-green-600' },
    { variant: 'warning', outline: true, className: 'border-orange-400 hover:bg-orange-400' },
    { variant: 'danger', outline: true, className: 'border-red-600 hover:bg-red-600' },
  ],
  defaultVariants: {
      variant: 'default',
      size: 'md',
      rounded: 'md'
  }
})

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {}

export const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({children, variant, outline, rounded, size, className, ... props}, ref) => {

    return (
        <button className={cn(button({ variant, outline, rounded, size, className }))} {... props} ref={ref}>
            {children}
        </button>
    );
  }
);