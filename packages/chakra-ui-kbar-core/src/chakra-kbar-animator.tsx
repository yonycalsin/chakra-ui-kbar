import * as React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import { KBarAnimator } from 'kbar'

export interface ChakraKBarAnimatorProps {
  children: React.ReactNode
}

export function ChakraKBarAnimator(props: ChakraKBarAnimatorProps) {
  const { children } = props

  const background = useColorModeValue('white', 'gray.800')

  const color = useColorModeValue('gray.900', 'white')

  return (
    <Box
      as={KBarAnimator}
      maxWidth="600px"
      width="100%"
      background={background}
      color={color}
      borderRadius="8px"
      overflow="hidden"
      boxShadow="0 16px 70px rgb(0 0 0 / 20%)"
    >
      {children}
    </Box>
  )
}
