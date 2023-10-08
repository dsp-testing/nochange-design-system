import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const card = tv({
  slots: {
    base: [
      'border',
      'border-solid',
      'border-foreground',
      'divide-y',
      'divide-foreground',
      'rounded-lg',
      'overflow-hidden',
      'dark:bg-shark-800',
      'dark:border-shark-500',
      'dark:divide-shark-500',
    ],
    header: ['text-shark-600', 'dark:text-shark-50', 'p-3'],
    body: ['text-shark-400', 'dark:text-shark-200', 'p-3'],
    footer: ['text-shark-400', 'dark:text-shark-200', 'p-3'],
  },
  variants: {
    transparent: {
      true: {
        base: ['!bg-transparent'],
      },
    },
  },
  defaultVariants: {},
})

export type CardVariantProps = VariantProps<typeof card>
