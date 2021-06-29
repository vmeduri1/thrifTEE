import React from 'react';
import {useSelector} from 'react-redux'
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Button,
  useDisclosure
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { addProduct } from '../store/cart'
import { useDispatch } from 'react-redux'
import {useHistory} from 'react-router-dom'
import CartDrawer from './Drawer/CartDrawer';





function ProductAddToCart({ price, name, image, product }) {
  const dispatch = useDispatch()
  const history = useHistory()
  const cart = useSelector((state) => state.cart)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleProductRedirect =() => {
    history.push(`/products/${product.id}`)
}

  const handleAdd = async(product) => {
  dispatch(addProduct(product))
  }

  const handleOpen = () => {
    onOpen()
  };

  return (

    <div>
         <CartDrawer isOpen={isOpen} onClose={onClose} cart={cart}/>
    <Flex p={50} w="md" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW={{ xl: "1200px" }}

        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        <Circle
          size="10px"
          // position="absolute"
          top={2}
          right={2}
          // bg="red.200"
        />

        <Image
          src={image}
          alt={`Picture of ${name}`}
          roundedTop="lg"
          height="500px"
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
              New
                </Badge>
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              // maxW={"200px" }
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'}
                   onClick={() => {
                    handleAdd(product)
                    handleOpen()
                    }}
                />
              </chakra.a>
            </Tooltip>

          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                ${price}
              </Box>
              <Box fontSize="lg">
              <Tooltip hasArrow label="Product Details" bg="red.600">
            <Button onClick={handleProductRedirect}>Quick Look</Button>
              </Tooltip>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
    </div>
  );


}

export default ProductAddToCart;
