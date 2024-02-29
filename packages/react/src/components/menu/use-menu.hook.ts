import type { MenuVariantProps } from '@giantnodes/theme'

import { menu } from '@giantnodes/theme'
import React from 'react'

import { createContext } from '@/utilities/context'

export type UseMenuProps = MenuVariantProps

export type UseMenuReturn = ReturnType<typeof useMenu>

export const useMenu = (props: UseMenuProps) => {
  const { size, status, variant } = props

  const slots = React.useMemo(() => menu({ size, status, variant }), [size, status, variant])

  return {
    slots,
  }
}

export const [MenuContext, useMenuContext] = createContext<UseMenuReturn>({
  name: 'MenuContext',
  strict: true,
  errorMessage: 'useMenuContext: `context` is undefined. Seems you forgot to wrap component within <Menu />',
})
