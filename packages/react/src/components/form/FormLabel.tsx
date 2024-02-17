import type { ComponentWithoutAs } from '@/utilities/types'
import type { LabelProps as ComponentProps } from 'react-aria-components'

import React from 'react'
import { Label as Component } from 'react-aria-components'

import { useFormGroupContext } from '@/components/form/use-form-group.hook'

export type FormLabelProps = ComponentWithoutAs<'label'> & ComponentProps

const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>((props, ref) => {
  const { children, className, ...rest } = props

  const { slots, labelProps } = useFormGroupContext()

  const getProps = React.useCallback(
    () => ({
      ref,
      className: slots.label({ className }),
      ...labelProps,
      ...rest,
    }),
    [ref, className, labelProps, slots, rest]
  )

  return <Component {...getProps()}>{children}</Component>
})

FormLabel.displayName = 'Form.Label'

export default FormLabel
