import type * as Polymophic from '@/utilities/polymorphic'
import type { AvatarVariantProps } from '@giantnodes/theme'

import React from 'react'

import AvatarGroup from '@/components/avatar/AvatarGroup'
import AvatarIcon from '@/components/avatar/AvatarIcon'
import AvatarImage from '@/components/avatar/AvatarImage'
import AvatarNotification from '@/components/avatar/AvatarNotification'
import { AvatarContext, useAvatar, useAvatarContext } from '@/components/avatar/use-avatar.hook'

const __ELEMENT_TYPE__ = 'span'

type ComponentOwnProps = AvatarVariantProps

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
    const { as, children, className, color, radius, size, zoomed, ...rest } = props

    const Element = as ?? __ELEMENT_TYPE__

    const parent = useAvatarContext()
    const context = useAvatar({
      color: parent?.color ?? color,
      radius: parent?.radius ?? radius,
      size: parent?.size ?? size,
      zoomed: parent?.zoomed ?? zoomed,
    })

    const component = React.useMemo<React.ComponentPropsWithoutRef<typeof __ELEMENT_TYPE__>>(
      () => ({
        className: context.slots.avatar({ className }),
        ...rest,
      }),
      [context.slots, className, rest]
    )

    return (
      <AvatarContext.Provider value={context}>
        <Element {...component} ref={ref}>
          {children}
        </Element>
      </AvatarContext.Provider>
    )
  }
)

export type { ComponentOwnProps as AvatarOwnProps, ComponentProps as AvatarProps }
export default Object.assign(Component, {
  Group: AvatarGroup,
  Image: AvatarImage,
  Icon: AvatarIcon,
  Notification: AvatarNotification,
})
