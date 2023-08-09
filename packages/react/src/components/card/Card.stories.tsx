import type { CardProps } from '@/components/card'
import type { Meta, StoryFn } from '@storybook/react'

import { card } from '@giantnodes/theme'

import { Card } from '@/components/card'

const Component: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
}

const defaultProps = {
  ...card.defaultVariants,
}

export const Default: StoryFn = (args: CardProps) => (
  <Card {...args}>
    <Card.Header>Lorem ipsum dolor sit amet.</Card.Header>
    <Card.Body>
      Quisque in purus elit. Vivamus tincidunt eget leo ac consectetur. Cras non est nec nibh cursus malesuada. Sed id
      mattis est. Mauris tempus, sapien et volutpat vehicula, mi purus efficitur neque, sed ultricies eros elit id nisi.
      Nulla hendrerit risus risus, vel eleifend tellus fermentum eget. Nullam dapibus purus sed metus placerat
      scelerisque ac eu enim. Ut pretium rhoncus eros, non condimentum lorem rutrum et. Sed pulvinar tortor elit, et
      facilisis lacus dictum quis. Curabitur mollis sem sed nisl eleifend tincidunt. Aliquam vitae diam tristique,
      accumsan leo eget, rhoncus tellus. Aliquam quis porttitor risus. Etiam sagittis tempus sapien congue tincidunt. In
      hac habitasse platea dictumst.
    </Card.Body>
    <Card.Footer>Lorem ipsum dolor sit amet.</Card.Footer>
  </Card>
)
Default.args = {
  ...defaultProps,
}

export default Component
