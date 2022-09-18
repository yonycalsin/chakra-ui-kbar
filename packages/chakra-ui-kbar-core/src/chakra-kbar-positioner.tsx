import * as React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import { KBarPositioner } from 'kbar'

export interface ChakraKBarPositionerProps {
  children: React.ReactNode
}

export function ChakraKBarPositioner(props: ChakraKBarPositionerProps) {
  const { children } = props

  const background = useColorModeValue('hsla(0,0%,100%,.9)', 'rgba(0, 0, 0, .5)')

  return (
    <Box
      as={KBarPositioner}
      position="fixed"
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      width="100%"
      inset="0px"
      padding="14vh 16px 16px"
      background={background}
      boxSizing="border-box"
    >
      {children}
    </Box>
  )
}
