import React from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {
  const { cartCount } = useSelector((state) => state.cart);
  return (
    <div>{cartCount} Articles in 🛒</div>
  )
}

export default Cart