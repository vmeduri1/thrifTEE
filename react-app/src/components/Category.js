import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as sessionActions from '../store/session'
import * as categoryActions from '../store/category'
import { getAllProductsByCategory} from '../store/category'


export default function Category() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const allCatProducts = useSelector((state) => Object.values(state.category.categories));
    const {id} = useParams()

    useEffect(() => {
        dispatch(getAllProductsByCategory(id));
    }, [dispatch])

    return (
        <>

        <div className="card" style = {{width: '18rem'}}>
                {allCatProducts.map(product => (
                    <div key={product.id}>
                    <img src={product.image_url} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {product.name}{product.price}{product.quantity}
                        </div>
                    </div>
                 ))}
            </div>

        </>
    )

}
