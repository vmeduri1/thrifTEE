import React from "react";
import { useSelector } from "react-redux";
import CartDrawer from '../Drawer/CartDrawer'
import BannerHero from './BannerHero'
import { Divider, Box, Image, Center, LinkBox, LinkOverlay, Heading, Flex } from "@chakra-ui/react"
import './index.css'


export default function HomePage() {

    const cart = useSelector((state) => state.cart)

    return (
        <>

            <Box h="125px">

                <Image
                    alt={'ThrifTEE Logo'}
                    fit={'cover'}
                    align={'center'}
                    w={'163em'}
                    h={'12em'}
                    src={
                        'https://res.cloudinary.com/dse6ebwba/image/upload/v1622252621/v2_Magenta_Vibrant_and_Dynamic_Parties_and_Celebrations_Retractable_Exhibition_Banner_e7bpv8.png'

                    }
                />
            </Box>

            <BannerHero />


            <Divider orientation="horizontal" colorScheme="pink" />


            <div className="homePage-container">


                <CartDrawer cart={cart} />


            </div>


            <Flex align={"center"} justify={"center"}>


                <LinkBox bg="white" margin="20px">
                    <Heading size="md" my="2">
                        <LinkOverlay href="categories/1" margin="20px">
                            <Image src="https://res.cloudinary.com/dse6ebwba/image/upload/v1622401279/3_rl7v2n.png" />
                        </LinkOverlay>

                    </Heading>
                </LinkBox>

                <LinkBox bg="white" margin="20px">
                    <Heading size="md" my="2">
                        <LinkOverlay href="/categories/2">
                            <Image src="https://res.cloudinary.com/dse6ebwba/image/upload/v1622401278/1_giq6rt.png" />
                        </LinkOverlay>

                    </Heading>
                </LinkBox>

                <LinkBox bg="white" margin="20px">
                    <Heading size="md" my="2">
                        <LinkOverlay href="/categories/3">
                            <Image src="https://res.cloudinary.com/dse6ebwba/image/upload/v1622401279/2_ntgkos.png" />
                        </LinkOverlay>

                    </Heading>
                </LinkBox>

                <LinkBox bg="white" margin="20px">
                    <Heading size="md" my="2">
                        <LinkOverlay href="/categories/4">
                            <Image src="https://res.cloudinary.com/dse6ebwba/image/upload/v1622401279/4_twhzgx.png" />
                        </LinkOverlay>

                    </Heading>
                </LinkBox>

            </Flex>

            <Center className="wasteless-container" mb="50px" >

                <Image
                    alt={'ThrifTEE Logo'}
                    fit={'cover'}
                    align={'center'}
                    maxWidth={'100%'}
                    maxHeight={'100%'}
                    src={

                        'https://res.cloudinary.com/dse6ebwba/image/upload/v1622255410/wastev3_z17khy.png'

                    }
                />

            </Center>

        </>
    )
}
