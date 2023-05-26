import { Text, TextProps } from '@eldoncosta-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typopgraphy/Text',
  component: Text,
  args: {
    size: 'md',
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt officia fugit quisquam eveniet expedita libero exercitationem, dicta quasi reiciendis reprehenderit dolore obcaecati qui inventore, quaerat repellendus tempore doloribus possimus perspiciatis.'
  },
  argTypes: {
    size: {
      options: ['xxs','xs','sm','md','lg','xl','2xl','4xl','5xl','6xl','7xl','9xl','8xl'],
      control: {
        type: 'inline-radio'
      }
    },
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  }
}
