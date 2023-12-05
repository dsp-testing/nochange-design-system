import type { Preview, ReactRenderer } from '@storybook/react'
import { withThemeByClassName } from '@storybook/addon-themes'
import React from 'react'

import './tailwind.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#0e1114',
        },
      ],
    },
  },
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    (Story) => (
      <div className="dark:bg-shark-950">
        <Story />
      </div>
    ),
  ],
}

export default preview
