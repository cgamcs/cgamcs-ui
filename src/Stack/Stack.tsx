import { FC, forwardRef, HTMLAttributes } from "react"
import { cn } from "../utils/utils";
import { cva, type VariantProps } from "class-variance-authority";


const stack = cva('justify-center', {
    variants: {
        justify: {
            start: 'justify-start',
            end: 'justify-end',
            center: 'justify-center',
            between: 'justify-between',
            around: 'justify-around',
            evenly: 'justify-evenly',
            stretch: 'justify-stretch',
            baseline: 'justify-baseline',
            normla: 'justify-normla'
        },
        contentAlign: {
            start: 'content-start',
            end: 'content-end',
            center: 'content-center',
            baseline: 'content-baseline',
            stretch: 'content-stretch',
        }
    },
    defaultVariants: {
        justify: 'between',
        contentAlign: 'center'
    }
})

export interface StackProps extends HTMLAttributes<HTMLDivElement>,VariantProps<typeof stack> {
    col?: boolean;
    spacing?: number;
}

export const Stack: FC<StackProps> = forwardRef<HTMLDivElement, StackProps>(({ children, col, spacing = 4, className, justify, contentAlign, ...props }, ref) => {
    return (
      <div className={cn('flex w-full gap-4 flex-wrap', col && 'flex-col', spacing && `gap-${spacing}`, stack({justify, contentAlign, className}))} {...props} ref={ref}>
          {children}
      </div>
    )
});