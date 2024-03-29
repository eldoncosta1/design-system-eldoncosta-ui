import { Box, BoxProps, Text } from '@eldoncosta-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando o elemento box</Text>
      </>
    )
  },
  argTypes: {
    children: {
      control: {
        type: null
      }
    }
  }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

