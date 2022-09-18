import * as React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import { KBarSearch } from 'kbar'

export function ChakraKBarSearch() {
  const background = useColorModeValue('gray.50', 'gray.700')

  const color = useColorModeValue('gray.900', 'white')

  return (
    <Box
      as={KBarSearch}
      padding="12px 16px"
      fontSize="16px"
      width="100%"
      boxSizing="border-box"
      outline="none"
      border="none"
      margin="0px"
      borderRadius="lg"
      background={background}
      color={color}
      defaultPlaceholder="What do you need?"
    />
  )
}
