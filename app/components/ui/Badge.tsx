'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { classNames } from '~/utils/classNames';

const badgeVariants = cva(
  'inline-flex items-center gap-1 transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-[#DBEAFE] text-[#2563EB] hover:bg-[#BFDBFE]', // light blue bg, primary blue text
        secondary:
          'border-transparent bg-[#EFF6FF] text-[#3B82F6] hover:bg-[#DBEAFE]', // slightly softer blue
        destructive:
          'border-transparent bg-red-500/10 text-red-500 hover:bg-red-500/20',
        outline:
          'text-[#2563EB] border border-[#2563EB]',
        primary:
          'bg-[#DBEAFE] text-[#2563EB] dark:text-[#93C5FD]', // blue with dark mode text
        success:
          'bg-green-100 text-green-700 dark:text-green-400',
        warning:
          'bg-yellow-100 text-yellow-700 dark:text-yellow-400',
        danger:
          'bg-red-100 text-red-700 dark:text-red-400',
        info:
          'bg-[#DBEAFE] text-[#2563EB] dark:text-[#93C5FD]',
        subtle:
          'border border-[#93C5FD]/30 dark:border-[#1E3A8A]/30 bg-white/50 dark:bg-[#1E3A8A]/50 backdrop-blur-sm text-[#2563EB] dark:text-[#93C5FD]',
      },
      size: {
        default: 'rounded-full px-2.5 py-0.5 text-xs font-semibold',
        sm: 'rounded-full px-1.5 py-0.5 text-xs',
        md: 'rounded-md px-2 py-1 text-xs font-medium',
        lg: 'rounded-md px-2.5 py-1.5 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);


export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
  icon?: string;
}

function Badge({ className, variant, size, icon, children, ...props }: BadgeProps) {
  return (
    <div className={classNames(badgeVariants({ variant, size }), className)} {...props}>
      {icon && <span className={icon} />}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
