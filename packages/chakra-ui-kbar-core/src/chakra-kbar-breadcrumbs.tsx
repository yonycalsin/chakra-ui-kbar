import * as React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Icon, useColorModeValue } from '@chakra-ui/react'
import { ActionImpl, useKBar, useMatches } from 'kbar'

import { ChakraKBarChevronRightIcon } from './chakra-kbar-chevron-right-icon'

export function ChakraKBarBreadcrumbs() {
  const { results, rootActionId } = useMatches()

  const filtered = results.filter(result => typeof result !== 'string')

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const action = React.useMemo(() => filtered[0] as ActionImpl, [rootActionId])

  const { query } = useKBar()

  const breadcrumItemBackground = useColorModeValue('gray.100', 'gray.700')

  return (
    <Breadcrumb
      separator={<Icon as={ChakraKBarChevronRightIcon} color="gray.500" />}
      px="1"
      mt="2"
      mb="4"
      spacing="0.5"
    >
      <BreadcrumbItem>
        <BreadcrumbLink
          background={breadcrumItemBackground}
          py="0.5"
          px="1"
          borderRadius="lg"
          fontSize="xs"
          onClick={() => query.setCurrentRootAction('')}
        >
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      {action?.ancestors?.map(action => (
        <BreadcrumbItem key={`command-bar-breadcrumbs-${action.id}`}>
          <BreadcrumbLink
            background={breadcrumItemBackground}
            py="0.5"
            px="1"
            borderRadius="lg"
            fontSize="xs"
            onClick={() => query.setCurrentRootAction(action.id)}
            textTransform="capitalize"
          >
            {action.id}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  )
}
