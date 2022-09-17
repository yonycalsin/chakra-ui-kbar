import * as React from 'react'
import { Box, HStack, Icon, Kbd, Text, useColorModeValue } from '@chakra-ui/react'
import type { ActionImpl } from 'kbar'
import { ChakraKBarChevronRightIcon } from './chakra-kbar-chevron-right-icon'

export interface ChakraKBarResultsItemProps {
  action: ActionImpl
  active: boolean
  currentRootActionId?: string
}

export const ChakraKBarResultsItem = React.forwardRef<HTMLDivElement, ChakraKBarResultsItemProps>((props, ref) => {
  const { action, active, currentRootActionId } = props

  const background = useColorModeValue(active ? 'gray.100' : 'transparent', active ? 'gray.900' : 'transparent')

  const color = useColorModeValue(active ? 'gray.900' : 'gray.500', active ? 'gray.50' : 'gray.500')

  const ancestors = React.useMemo(() => {
    if (!currentRootActionId) return action.ancestors
    const index = action.ancestors.findIndex(ancestor => ancestor.id === currentRootActionId)
    // +1 removes the currentRootAction; e.g.
    // if we are on the "Set theme" parent action,
    // the UI should not display "Set theme… > Dark"
    // but rather just "Dark"
    return action.ancestors.slice(index + 1)
  }, [action.ancestors, currentRootActionId])

  return (
    <Box
      ref={ref}
      px="4"
      py="3"
      background={background}
      borderRadius="lg"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      margin="0"
      cursor="pointer"
      color={color}
    >
      <HStack>
        {action.icon ? action.icon : null}
        <HStack alignItems="center">
          {ancestors.length > 0 &&
            ancestors.map(ancestor => (
              <React.Fragment key={ancestor.id}>
                <Text textColor="gray.500">{ancestor.name}</Text>
                <Icon as={ChakraKBarChevronRightIcon} />
              </React.Fragment>
            ))}
        </HStack>
        <Text>{action.name}</Text>
      </HStack>
      <div>
        {action.shortcut?.length ? (
          <HStack spacing="1">
            {action.shortcut.map((shortcut, index) => (
              <React.Fragment key={shortcut}>
                {index > 0 ? <Text>+</Text> : null}
                <Kbd textTransform="uppercase">{shortcut}</Kbd>
              </React.Fragment>
            ))}
          </HStack>
        ) : null}
      </div>
    </Box>
  )
})

ChakraKBarResultsItem.displayName = 'ChakraKBarResultsItem'
