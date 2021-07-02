import React from 'react';
import {
  Box,
  Flex,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  children,
  label,
  href,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube, FaGithub } from 'react-icons/fa';
import { ReactNode } from 'react';



export default function FooterDetails() {


  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6} align={{ base: 'center', md: 'center' }}>
          <Flex
            justify='space-evenly'
            // bg='lightblue'
            w='750px'
          >
            <Text
              // fontSize={'l'}
              fontWeight='500'
              justify={{ base: 'center', md: 'space-between' }}
              align={{ base: 'center', md: 'center' }}
              ml='-55px'
            // >CONNECT WITH THE DEVS</Text>
            >CONNECT WITH THE DEVELOPERS</Text>

            <Flex
              fontSize='17px'
              fontWeight='600'
              border='1px solid rgb(211, 211, 211)'
              borderRadius='5px'
              justifyContent='center'
              w='75px'
            >
              <a href='/aboutDevs'>Natalie</a>
            </Flex>
            <Flex
              fontSize='17px'
              fontWeight='600'
              border='1px solid rgb(211, 211, 211)'
              borderRadius='5px'
              justifyContent='center'
              w='75px'
            >
              <a href='/aboutDevs'>Vishaal</a>
            </Flex>
            <Flex
              fontSize='17px'
              fontWeight='600'
              border='1px solid rgb(211, 211, 211)'
              borderRadius='5px'
              justifyContent='center'
              w='90px'
            // w='70px'
            >
              <a href='/aboutDevs'>Jonathan</a>
            </Flex>
            <Flex
              fontSize='17px'
              fontWeight='600'
              border='1px solid rgb(211, 211, 211)'
              borderRadius='5px'
              justifyContent='center'
              w='70px'
            >
              <a href='/aboutDevs'>B</a>
            </Flex>


          </Flex>

        </Stack>
        <Flex
          w='255px'
        >
          <Text
            fontSize={'l'}
            fontWeight={'500'}
          >
            © thrifTEE. All rights reserved
          </Text>
          <Text
            ml='15px'
          >
            <a href='https://github.com/vmeduri1/thrifTEE' mt={'3px'}><FaGithub fontSize={'25px'} /></a>
          </Text>
        </Flex>
      </Container>
    </Box>
  )

}
