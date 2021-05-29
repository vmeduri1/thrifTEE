import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as sessionActions from '../../store/session'
import * as productActions from "../../store/products"
import { getAllProducts } from '../../store/products'
import { VerticallyCenter } from '../../modals/Modal'
import CartDrawer from '../Drawer/CartDrawer'
import Item from '../Item'
import BannerHero from './BannerHero'
import { Wrap, WrapItem, Divider, Box, Image, Container, Center} from "@chakra-ui/react"
import './index.css'




export default function HomePage() {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const allProducts = useSelector((state) => state.products.products);
    const cart = useSelector((state) => state.cart)
    // const [products, setProducts] = useState([])

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch])



    return (
        <>
            {/* <VerticallyCenter /> */}
            {/* <VerticallyCenter /> */}
            {/* <div>
                {allProducts.map(product => (
                    <div>{product.name}
                        <img src={product.image_url} />
                    </div>
                ))}
            </div> */}
            <Box h="125px" center>

                <Image
                    alt={'ThrifTEE Logo'}
                    fit={'cover'}
                    align={'center'}
                    w={'100%'}
                    h={'100%'}
                    src={
                        'https://res.cloudinary.com/dse6ebwba/image/upload/v1622252621/v2_Magenta_Vibrant_and_Dynamic_Parties_and_Celebrations_Retractable_Exhibition_Banner_e7bpv8.png'

                    }
                />

            </Box>

            <BannerHero />



            <Divider orientation="horizontal" colorScheme="pink" />


            <div className="homePage-container">


                <CartDrawer cart={cart} />

                <Wrap spacing="20px">


                    {allProducts.map((product, idx) => (


                        <WrapItem key={product.id}>

                            <Item price={product.regular_price} name={product.name} image={product.image_url} product={product} id={product.id} />

                        </WrapItem>



                    ))}
                </Wrap>

            </div>

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
