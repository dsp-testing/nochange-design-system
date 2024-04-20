import type { NavigationVariantProps } from '@giantnodes/theme'

import { navigation } from '@giantnodes/theme'
import React from 'react'

import { createContext } from '@/utilities/context'

type UseNavigationProps = NavigationVariantProps

type UseNavigationReturn = ReturnType<typeof useNavigation>

export const useNavigation = (props: UseNavigationProps) => {
  const { position, size, orientation, variant } = props

  const slots = React.useMemo(
    () =>
      navigation({
        position,
        size,
        orientation,
        variant,
      }),
    [position, size, orientation, variant]
  )

  return {
    slots,
  }
}

export const [NavigationContext, useNavigationContext] = createContext<UseNavigationReturn>({
  name: 'NavigationContext',
  strict: true,
  errorMessage:
    'useNavigationContext: `context` is undefined. Seems you forgot to wrap component within <Navigation />',
})
