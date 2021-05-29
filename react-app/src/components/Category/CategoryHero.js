import { StarIcon} from '@chakra-ui/icons'
import { Box, HStack, Icon, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { chakra, HTMLChakraProps } from '@chakra-ui/react'




export const BannerLink = (props: HTMLChakraProps<'a'>) => (
  <chakra.a
    {...props}
    href="#"
    px="4"
    py="1.5"
    textAlign="center"
    borderWidth="1px"
    borderColor="whiteAlpha.400"
    fontWeight="medium"
    rounded="base"
    _hover={{ bg: 'whiteAlpha.200' }}
  />
)

export const CategoryHero = () => (
  <Box as="section" pt="8" pb="12">
    <Stack
      direction={{ base: 'column', sm: 'row' }}
      justifyContent="center"
      alignItems="center"
      py="3"
      px={{ base: '3', md: '6', lg: '8' }}
      color="white"
      bg={useColorModeValue('blue.600', 'blue.400')}
    >
      <HStack spacing="3">
        <Icon as={StarIcon} fontSize="2xl" h="10" />
        <Text fontWeight="medium" marginEnd="2">
          Summer's here! thrifTEE has everything you need for sunny days!

        </Text>
        <Icon as={StarIcon} fontSize="2xl" h="10" />
      </HStack>
      {/* <BannerLink w={{ base: 'full', sm: 'auto' }} flexShrink={0}>
        Resend email
      </BannerLink> */}
    </Stack>
  </Box>
)
