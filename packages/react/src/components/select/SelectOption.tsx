import type { ListBoxItemProps as ComponentProps } from 'react-aria-components'

import React from 'react'
import { ListBoxItem as Component } from 'react-aria-components'

import { useSelectContext } from '@/components/select/use-select.hook'

type SelectOptionProps = ComponentProps

const SelectOption = React.forwardRef<HTMLDivElement, SelectOptionProps>((props, ref) => {
  const { children, className, ...rest } = props

  const { slots } = useSelectContext()

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.option(),
      ...rest,
    }),
    [ref, rest, slots]
  )

  return <Component {...getProps()}>{children}</Component>
})

export default SelectOption
