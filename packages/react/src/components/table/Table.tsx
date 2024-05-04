import type * as Polymophic from '@/utilities/polymorphic'
import type { TableVariantProps } from '@giantnodes/theme'
import type { TableProps } from 'react-aria-components'

import React from 'react'
import { Table } from 'react-aria-components'

import TableBody from '@/components/table/TableBody'
import TableCell from '@/components/table/TableCell'
import TableColumn from '@/components/table/TableColumn'
import TableHead from '@/components/table/TableHead'
import TableRow from '@/components/table/TableRow'
import { TableContext, useTable } from '@/components/table/use-table.hook'

const __ELEMENT_TYPE__ = 'table'

type ComponentOwnProps = Omit<TableProps, 'selectionMode' | 'selectionBehavior'> &
  TableVariantProps & {
    behavior?: 'toggle' | 'replace'
    mode?: 'none' | 'single' | 'multiple'
  }

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymophic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps
>

type ComponentType = <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => React.ReactNode

const Component: ComponentType = React.forwardRef(
  <TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
    props: ComponentProps<TElement>,
    ref: Polymophic.Ref<TElement>
  ) => {
    const { as, children, className, behavior, mode, size, sticky, striped, headingless, ...rest } = props

    const Element = as ?? Table

    const context = useTable({ size, sticky, striped, headingless })

    const component = React.useMemo<TableProps>(
      () => ({
        selectionBehavior: behavior,
        selectionMode: mode,
        className: context.slots.table({ className: className?.toString() }),
        ...rest,
      }),
      [behavior, className, context.slots, mode, rest]
    )

    return (
      <TableContext.Provider value={context}>
        <Element {...component} ref={ref}>
          {children}
        </Element>
      </TableContext.Provider>
    )
  }
)

export type { ComponentOwnProps as TableOwnProps, ComponentProps as TableProps }
export default Object.assign(Component, {
  Body: TableBody,
  Cell: TableCell,
  Column: TableColumn,
  Head: TableHead,
  Row: TableRow,
})
