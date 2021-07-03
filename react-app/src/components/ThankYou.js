import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './ThankYou.css';
import {getOrders }from '../store/order'
// import Footer from '../components/Footer'

function ThankYouFunc() {

  const orders = Object.values(useSelector(state => state?.orders?.id))
  const dispatch = useDispatch()
  console.log('+++++orders', orders)


  useEffect(() => {
    dispatch(getOrders());
}, [dispatch])


  return (
    // <>
    <div className='container-for-body'>
      <div className="thank-you-container">
        <img className="thank-you-image" alt = "Thank You Page" src="https://images-na.ssl-images-amazon.com/images/I/51nxlj1B7zL._AC_SY355_.jpg">
        </img>
        <h2>Order Shipped✓</h2>
        {orders.map((order, idx)=> (
          <span key={idx}>{order.id}</span>
        ))}
      </div>
    </div>
    // </>
  )
}

export default ThankYouFunc;
