import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as sessionActions from '../store/session'
import * as categoryActions from '../store/category'
import { getAllProductsByCategory } from '../store/category'
import Cart from './Cart'
import Item from './Item'


export default function Category() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const allCatProducts = useSelector((state) => Object.values(state.category.categories));
    const { id } = useParams()
    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')
    const [cart, setCart] = useState(cartFromLocalStorage);


    useEffect(() => {
        dispatch(getAllProductsByCategory(id));
    }, [dispatch])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    // const addToCart = (product) => {
    //     let newCart = [...cart];
    //     let itemInCart = newCart.find(
    //         (item) => product.name === item.name
    //     );
    //     if (itemInCart) {
    //         itemInCart.quantity++;
    //     } else {
    //         itemInCart = {
    //             ...product,
    //             quantity: 1,
    //         };
    //         newCart.push(itemInCart);
    //     }
    //     setCart(newCart);
    //     console.log(newCart)
    // };

    return (
        <>

            <div className="card" style={{ width: '18rem' }}>
                {allCatProducts.map((product, idx) => (
                    <div key={product.id}>
                        <Item price={product.regular_price} name={product.name} image={product.image_url}  />
                        {/* <img src={product.image_url} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            {alert(product.name)}
                            <h5>{product.price}</h5>
                            <img src={product.image} alt={product.name} />
                            <button onClick={() => addToCart(product)} >

                                Add to Cart
                            </button>
                        </div> */}
                    </div>
                 ))}
            </div>

            <Cart cart={cart} setCart={setCart} />

        </>
    )

}
