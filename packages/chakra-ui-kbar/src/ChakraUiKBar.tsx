import * as React from 'react'

export interface ChakraKBarProviderProps {
  children: React.ReactNode
}

export function ChakraKBarProvider(props: ChakraKBarProviderProps) {
  return <div id="chakra-ui-kbar-wrapper">{props.children}</div>
}

ChakraKBarProvider.displayName = 'ChakraKBarProvider'
