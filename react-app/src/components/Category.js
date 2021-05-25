import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as sessionActions from '../store/session'
import * as productActions from '../store/products'

export default function Category() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const allProducts = useSelector((state) => state.products.products);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch])

    return (
        <div>Hello</div>
    )

}
