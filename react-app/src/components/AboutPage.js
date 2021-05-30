import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  Flex,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';
import { SiLinkedin, SiMessenger } from 'react-icons/si';
import React from 'react';



export default function SocialProfileSimple() {


  return (
    <Flex h={'85vh'}>
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
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          Natalie Oldroyd
          </Heading>
        {/* <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Actress, musician, songwriter and artist. PM for work inquires or{' '}
            <Link href={'#'} color={'blue.400'}>
              #tag
            </Link>{' '}
            me in your posts
          </Text> */}

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
          <Button
            flex={1}
            fontSize={'2xl'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}
          >
            <a href='https://github.com/natoh19'><i className="fab fa-github"></i></a>
          </Button>
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
          >
            <a href='https://www.linkedin.com/in/natalie-oldroyd/'>{<SiLinkedin />}</a>
          </Button>
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
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          Vishaal Meduri
          </Heading>
        {/* <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Actress, musician, songwriter and artist. PM for work inquires or{' '}
            <Link href={'#'} color={'blue.400'}>
              #tag
            </Link>{' '}
            me in your posts
          </Text> */}

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
          <Button
            flex={1}
            fontSize={'2xl'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
            <a href='https://github.com/vmeduri1'><i className="fab fa-github"></i></a>
          </Button>
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
            }}>
            <a href='https://www.linkedin.com/in/vishaalmeduri/'>{<SiLinkedin />}</a>
          </Button>
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
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          Jonathan Chan
          </Heading>
        {/* <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Actress, musician, songwriter and artist. PM for work inquires or{' '}
            <Link href={'#'} color={'blue.400'}>
              #tag
            </Link>{' '}
            me in your posts
          </Text> */}

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
          <Button
            flex={1}
            fontSize={'2xl'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
            <a href='https://github.com/Jc-008'><i className="fab fa-github"></i></a>
          </Button>
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
            }}>
            <a href='https://www.linkedin.com/in/jonathan-chan-14438952/'>{<SiLinkedin />}</a>
          </Button>
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
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          B Salinas
          </Heading>
        {/* <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Actress, musician, songwriter and artist. PM for work inquires or{' '}
            <Link href={'#'} color={'blue.400'}>
              #tag
            </Link>{' '}
            me in your posts
          </Text> */}

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
          <Button
            flex={1}
            fontSize={'2xl'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
            <a href='https://github.com/B-Salinas'><i className="fab fa-github"></i></a>
          </Button>
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
            }}>
            <a href='https://www.linkedin.com/in/b-salinas/'>{<SiLinkedin />}</a>
          </Button>
        </Stack>
      </Box>
    </Flex >
  );

}
