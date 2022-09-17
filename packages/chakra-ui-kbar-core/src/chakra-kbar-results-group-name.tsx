import * as React from 'react'
import { Box } from '@chakra-ui/react'

export interface ChakraKBarResultsGroupNameProps {
  children: React.ReactNode
}

const ChakraKBarResultsGroupName = React.forwardRef<HTMLDivElement, ChakraKBarResultsGroupNameProps>((props, ref) => {
  const { children } = props

  return (
    <Box ref={ref} p="2" fontSize="10px" textTransform="uppercase" letterSpacing="1px">
      {children}
    </Box>
  )
})

ChakraKBarResultsGroupName.displayName = 'ChakraKBarResultsGroupName'

export { ChakraKBarResultsGroupName }
