import type * as Polymophic from '@/utilities/polymorphic'
import type { ColumnProps } from 'react-aria-components'

import React from 'react'
import { Column } from 'react-aria-components'

import { useTableContext } from '@/components/table/use-table.hook'

const __ELEMENT_TYPE__ = 'th'

type ComponentOwnProps = ColumnProps

type ComponentProps<T extends React.ElementType> = Polymophic.ComponentPropsWithRef<T, ComponentOwnProps>

type ComponentType = <T extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<T>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <T extends React.ElementType = typeof __ELEMENT_TYPE__>(props: ComponentProps<T>, ref: Polymophic.Ref<T>) => {
    const { as, children, className, ...rest } = props

    const Element = as ?? Column

    const { slots } = useTableContext()

    const component = React.useMemo<ColumnProps>(
      () => ({
        className: slots.th({ className: className?.toString() }),
        ...rest,
      }),
      [className, rest, slots]
    )

    return (
      <Element {...component} ref={ref}>
        {children}
      </Element>
    )
  }
)

export type { ComponentOwnProps as TableColumnProps }
export default Component
