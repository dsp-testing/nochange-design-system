'use client'

import type { DividerVariantProps } from '@giantnodes/theme'
import React from 'react'
import { divider } from '@giantnodes/theme'

import type * as Polymorphic from '~/utilities/polymorphic'

const __ELEMENT_TYPE__ = 'hr'

type ComponentOwnProps = DividerVariantProps

type ComponentProps<TElement extends React.ElementType = typeof __ELEMENT_TYPE__> = Polymorphic.ComponentPropsWithRef<
  TElement,
  ComponentOwnProps
>

type ComponentType = (<TElement extends React.ElementType = typeof __ELEMENT_TYPE__>(
  props: ComponentProps<TElement>
) => Polymorphic.ExoticComponentReturn) &
  Polymorphic.NamedExoticComponentType

const Component: ComponentType = React.forwardRef<React.ReactElement<ComponentOwnProps>, ComponentOwnProps>(
  <TElement extends React.ElementType>(props: ComponentProps<TElement>, ref: Polymorphic.Ref<TElement>) => {
    const { as, children, className, orientation, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const slots = React.useMemo(() => divider({ orientation }), [orientation])

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
      () => ({
        'aria-orientation': orientation,
        'data-orientation': orientation,
        className: slots.divider({ className }),
        ...rest,
      }),
      [className, orientation, rest, slots]
    )

    return (
      <Element {...component} ref={ref}>
        {children}
      </Element>
    )
  }
)

Component.displayName = 'Divider'

export type { ComponentOwnProps as DividerOwnProps, ComponentProps as DividerProps }
export default Component
