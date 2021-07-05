import {
  Heading,
  Avatar,
  Box,
  Stack,
  Button,
  Link,
  Badge,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { SiLinkedin} from 'react-icons/si';
import React from 'react';

export default function SocialProfileSimple() {


  return (
    <Flex h={'85vh'} style={{marginBottom: '5em'}}>
      <Box
        margin={'40px'}
        mt={'125px'}
        maxW={'400px'}
        h={'625px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'2xl'}
        p={6}
        textAlign={'center'}>
        <Flex

          w='347.75px'
          flexDirection='column'
        >
          <Link
            href='https://natoh19.github.io/'

          target='_blank'>
            <Avatar
              size={'3xl'}

              src={
                'https://avatars.githubusercontent.com/u/60409772?v=4'
              }
              alt={'Avatar Alt'}
              mb={4}
              pos={'relative'}
              _after={{
                content: '""',
                w: 4,
                h: 4,
                border: '2px solid white',
                pos: 'absolute',
                bottom: 0,
                right: 3,
              }}
            />
            <Heading
              fontSize={'2xl'}
              fontFamily={'body'}
            >
              Natalie Oldroyd
            </Heading>
          </Link>
        </Flex>
        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'600'}
            fontSize={'l'}
          >
            Software Developer
          </Badge>
        </Stack>
        <Stack mt={8} direction={'row'} spacing={4}>
          <a href='https://github.com/natoh19' target='_blank'>
            <Button
              flex={1}
              fontSize={'2xl'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}
              w='165.88px'
            >
              <i className="fab fa-github"></i>
            </Button>
          </a>
          <a href='https://www.linkedin.com/in/natalie-oldroyd/' target='_blank'>
            <Button
              flex={1}
              fontSize={'2xl'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}
              w='165.88px'
            >
              {<SiLinkedin />}
            </Button>
          </a>
        </Stack>
      </Box >


      <Box
        margin={'40px'}
        mt={'125px'}
        maxW={'400px'}
        h={'625px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'2xl'}
        p={6}
        textAlign={'center'}>
        <Flex
          // bg='lightblue'
          w='347.75px'
          flexDirection='column'
        >
          <Link
            href='https://vmeduri1.github.io/'
          target='_blank'
          >
            <Avatar
              size={'3xl'}
              src={
                'https://avatars.githubusercontent.com/u/71046664?v=4'
              }
              alt={'Avatar Alt'}
              mb={4}
              pos={'relative'}
              _after={{
                content: '""',
                w: 4,
                h: 4,
                border: '2px solid white',
                pos: 'absolute',
                bottom: 0,
                right: 3,
              }}
            />
            <Heading
              fontSize={'2xl'}
              fontFamily={'body'}
            >
              Vishaal Meduri
            </Heading>
          </Link>
        </Flex>
        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'600'}
            fontSize={'l'}
          >
            Software Developer
          </Badge>
        </Stack>
        <Stack mt={8} direction={'row'} spacing={4}>
          <a href='https://github.com/vmeduri1' target='_blank'>
            <Button
              flex={1}
              fontSize={'2xl'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}
              w='165.88px'
            >
              <i className="fab fa-github"></i>
            </Button>
          </a>
          <a href='https://www.linkedin.com/in/vishaalmeduri/' target='_blank'>
            <Button
              flex={1}
              fontSize={'2xl'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}
              w='165.88px'
            >
              {<SiLinkedin />}
            </Button>
          </a>
        </Stack>
      </Box>


      <Box
        margin={'40px'}
        mt={'125px'}
        maxW={'400px'}
        h={'625px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'2xl'}
        p={6}
        textAlign={'center'}>
        <Flex

          w='347.75px'
          flexDirection='column'
        >
          <Link
            href='https://jc-008.github.io/'

          target='_blank'>
            <Avatar
              size={'3xl'}
              src={
                'https://avatars.githubusercontent.com/u/70030725?v=4'
              }
              alt={'Avatar Alt'}
              mb={4}
              pos={'relative'}
              _after={{
                content: '""',
                w: 4,
                h: 4,
                border: '2px solid white',
                pos: 'absolute',
                bottom: 0,
                right: 3,
              }}
            />
            <Heading
              fontSize={'2xl'}
              fontFamily={'body'}
            >
              Jonathan Chan
            </Heading>
          </Link>
        </Flex>
        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'600'}
            fontSize={'l'}
          >
            Software Developer
          </Badge>
        </Stack>
        <Stack mt={8} direction={'row'} spacing={4}>
          <a href='https://github.com/Jc-008' target='_blank'>
            <Button
              flex={1}
              fontSize={'2xl'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}
              w='165.88px'
            >
              <i className="fab fa-github"></i>
            </Button>
          </a>
          <a href='https://www.linkedin.com/in/jonathan-chan8/' target='_blank'>
            <Button
              flex={1}
              fontSize={'2xl'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}
              w='165.88px'
            >
              {<SiLinkedin />}
            </Button>
          </a>
        </Stack>
      </Box>


      <Box
        margin={'40px'}
        mt={'125px'}
        maxW={'400px'}
        h={'625px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'2xl'}
        p={6}
        textAlign={'center'}>
        <Flex
          w='347.75px'
          flexDirection='column'
        >
          <Link
            href='https://b-salinas.github.io/'
          target='_blank'>
            <Avatar
              size={'3xl'}
              src={
                'https://avatars.githubusercontent.com/u/31112601?v=4'
              }
              alt={'Avatar Alt'}
              mb={4}
              pos={'relative'}
              _after={{
                content: '""',
                w: 4,
                h: 4,
                border: '2px solid white',
                pos: 'absolute',
                bottom: 0,
                right: 3,
              }}
            />
            <Heading
              fontSize={'2xl'}
              fontFamily={'body'}
            >
              B Salinas
            </Heading>
          </Link>
        </Flex>
        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'600'}
            fontSize={'l'}
          >
            Software Developer
          </Badge>
        </Stack>
        <Stack mt={8} direction={'row'} spacing={4}>
          <a href='https://github.com/B-Salinas' target='_blank'>
            <Button
              flex={1}
              fontSize={'2xl'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}
              w='165.88px'
            >
              <i className="fab fa-github"></i>
            </Button>
          </a>
          <a href='https://www.linkedin.com/in/b-salinas/' target='_blank'>
            <Button
              flex={1}
              fontSize={'2xl'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}
              w='165.88px'
            >
              {<SiLinkedin />}
            </Button>
          </a>
        </Stack>
      </Box>
    </Flex >
  );

}
