import * as React from 'react'
import { ChakraProvider, useColorMode } from '@chakra-ui/react'
// @ts-expect-error ts(2307)
import { ChakraKBar } from '@chakra-ui-kbar/core'
import { Meta } from '@storybook/react'

export default {
  title: 'Components/CommandBar',
} as Meta

export enum CommandBarSections {
  GENERAL = 'general',
  NAVIGATION = 'navigation',
}

export const Default = () => {
  const { setColorMode } = useColorMode()

  return (
    <>
      <ChakraKBar
        actions={[
          {
            id: 'theme',
            name: 'Theme',
            shortcut: ['g', 't'],
            keywords: 'change-theme',
            section: CommandBarSections.GENERAL,
            // icon: <RiComputerLine />,
          },
          {
            id: 'theme-dark',
            name: 'Dark',
            shortcut: [],
            keywords: 'Dark Theme',
            // icon: <BiMoon />,
            perform: () => setColorMode('dark'),
            parent: 'theme',
          },
          {
            id: 'theme-light',
            name: 'Light',
            shortcut: [],
            keywords: 'Light Theme',
            // icon: <BiMoon />,
            perform: () => setColorMode('light'),
            parent: 'theme',
          },
        ]}
      >
        <p>Press ctrl+K to open the command bar</p>
      </ChakraKBar>
    </>
  )
}

Default.decorators = [
  (Story: any) => {
    return <ChakraProvider>{Story()}</ChakraProvider>
  },
]
