import * as React from 'react'
import { Box } from '@chakra-ui/react'
import { KBarPortal, KBarProvider } from 'kbar'
import { ChakraKBarPositioner } from './chakra-kbar-positioner'
import { ChakraKBarAnimator } from './chakra-kbar-animator'
import { ChakraKBarBreadcrumbs } from './chakra-kbar-breadcrumbs'
import { ChakraKBarSearch } from './chakra-kbar-search'
import { ChakraKBarResults } from './chakra-kbar-results'

export interface ChakraKBarProps {
  children: React.ReactNode
}

export function ChakraKBar(props: ChakraKBarProps) {
  const { children } = props

  return (
    <KBarProvider
      options={{
        enableHistory: true,
      }}
    >
      <KBarPortal>
        <ChakraKBarPositioner>
          <ChakraKBarAnimator>
            <Box p="2">
              <ChakraKBarBreadcrumbs />
              <ChakraKBarSearch />
            </Box>
            <ChakraKBarResults />
          </ChakraKBarAnimator>
        </ChakraKBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  )
}
