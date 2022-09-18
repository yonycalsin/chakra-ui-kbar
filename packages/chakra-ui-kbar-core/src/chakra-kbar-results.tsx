import * as React from 'react'
import { Box, Text, VStack } from '@chakra-ui/react'
import { KBarResults, useMatches } from 'kbar'
import { ChakraKBarResultsGroupName } from './chakra-kbar-results-group-name'
import { ChakraKBarResultsItem } from './chakra-kbar-results-item'

export function ChakraKBarResults() {
  const { results, rootActionId } = useMatches()

  const isEmpty = results.length === 0

  if (isEmpty) {
    return (
      <Box p="14" display="flex" justifyContent="center" alignItems="center">
        <VStack spacing="4">
          {/* <Image width="16" src={images.EMPTY_STATE_ILLUSTRATION_OF_TASKS} /> */}
          <Text>No Results</Text>
        </VStack>
      </Box>
    )
  }

  return (
    <Box padding="2">
      <KBarResults
        items={results}
        onRender={params => {
          const { item, active } = params

          if (typeof item === 'string') {
            return <ChakraKBarResultsGroupName>{item}</ChakraKBarResultsGroupName>
          }

          return <ChakraKBarResultsItem action={item} active={active} currentRootActionId={rootActionId as string} />
        }}
      />
    </Box>
  )
}
