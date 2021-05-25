import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as sessionActions from '../store/session'
import * as productActions from '../store/products'
import { getAllProducts } from '../store/products'
import Cart from './Cart'

export default function HomePage() {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const allProducts = useSelector((state) => state.products.products);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch])


    return (
        <>

            <div className="card" style = {{width: '18rem'}}>
                {allProducts.map(product => (
                    <div>
                    <img src={product.image_url} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="product-name">{product.name}</h5>
                            <h5 class="product-price">{product.price}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            <Cart />
                        </div>
                    </div>
                 ))}
            </div>

        </>
    )
}
