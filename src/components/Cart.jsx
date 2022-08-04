import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import '../styles/cart.css';
import ItemCart from './ItemCart';


export const Cart = () => {
  const {cart, totalPrice} = useCartContext();

  if(cart.length === 0) {
    return(
      <>
        <p>Empty cart...</p>
        <Link to='/'> Take ACTIONS</Link>
      </>
    );

  }

  return (
    <>
      {
        cart.map(project => <ItemCart key={project.id} project={project}/> )
      }
      <p>
        Total: {totalPrice()}
      </p>
    </>
  );
}

export default Cart;