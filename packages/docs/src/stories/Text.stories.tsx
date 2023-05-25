import { Text, TextProps } from '@eldoncosta-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typopgraphy/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt officia fugit quisquam eveniet expedita libero exercitationem, dicta quasi reiciendis reprehenderit dolore obcaecati qui inventore, quaerat repellendus tempore doloribus possimus perspiciatis.'
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  }
}
