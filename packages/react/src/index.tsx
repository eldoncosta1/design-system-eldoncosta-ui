<<<<<<< HEAD
export * from './components/Avatar'
export * from './components/Box'
export * from './components/Button'
export * from './components/Checkbox'
export * from './components/Heading'
export * from './components/Text'
export * from './components/TextInput'

=======
import { ComponentProps } from 'react'

import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  borderRadius: '$sm',
  border: 0,
  fontWeight: 'bold',
  color: '$white',

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
>>>>>>> 5c193c5d136bfba0db34aa3b4584961ac66294ee
