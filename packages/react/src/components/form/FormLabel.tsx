import type * as Polymophic from '@/utilities/polymorphic'
import type { LabelProps } from 'react-aria-components'

import React from 'react'
import { Label } from 'react-aria-components'

import { useFormGroupContext } from './use-form-group.hook'

const __ELEMENT_TYPE__ = 'label'

type ComponentOwnProps = LabelProps

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
    const { as, children, className, color, radius, size, variant, ...rest } = props

    const Element = as ?? Label

    const { slots, labelProps, status } = useFormGroupContext()

    const component = React.useMemo<LabelProps>(
      () => ({
        className: slots.label({ className, status }),
        ...labelProps,
        ...rest,
      }),
      [className, labelProps, rest, slots, status]
    )

    return (
      <Element {...component} ref={ref}>
        {children}
      </Element>
    )
  }
)

export type { ComponentOwnProps as FormLabelOwnProps, ComponentProps as FormLabelProps }
export default Component
