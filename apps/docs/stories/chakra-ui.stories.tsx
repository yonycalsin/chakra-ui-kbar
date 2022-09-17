import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { ChakraKBar } from '@chakra-ui-kbar/core'
import { Meta } from '@storybook/react'

export default {
  title: 'Components/Button',
} as Meta

export const Default = () => {
  return (
    <ChakraProvider>
      <ChakraKBar>
        <p>Press ctrl+K to open the command bar</p>
      </ChakraKBar>
    </ChakraProvider>
  )
}
