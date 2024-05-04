import type * as Polymophic from '@/utilities/polymorphic'
import type { CheckboxVariantProps } from '@giantnodes/theme'
import type { CheckboxProps } from 'react-aria-components'

import { checkbox } from '@giantnodes/theme'
import React from 'react'
import { Checkbox } from 'react-aria-components'

const __ELEMENT_TYPE__ = 'label'

type ComponentOwnProps = CheckboxProps & CheckboxVariantProps

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
    const { as, children, className, color, size, ...rest } = props

    const Element = as ?? Checkbox

    const slots = React.useMemo(() => checkbox({ color, size }), [color, size])

    const component = React.useMemo<CheckboxProps>(
      () => ({
        className: slots.label({ className: className?.toString() }),
        ...rest,
      }),
      [className, rest, slots]
    )

    return (
      <Element {...component} ref={ref}>
        <svg
          aria-hidden="true"
          className={slots.icon()}
          fill="none"
          height="24"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" stroke="none" />
          <path d="M5 12l5 5l10 -10" />
        </svg>
      </Element>
    )
  }
)

export type { ComponentOwnProps as CheckboxOwnProps, ComponentProps as CheckboxProps }
export default Component
