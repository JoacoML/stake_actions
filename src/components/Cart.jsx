import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import ItemCart from './ItemCart';
import { doc, collection, setDoc } from 'firebase/firestore';
import  db from '../firebase/config'


export const Cart = () => {
  const {cart, totalPrice, clearCart} = useCartContext();

  const buyClick = () => {

    const order = {
      buyer:{
        name: 'Jake',
        email: 'Jake@gmail.com',
        phone: '351123'
      },
  
      items: cart.map(project => ({ id: project.id, title: project.title, price: project.price, quantity: project.quantity })),
      total: totalPrice (),
    }
  
    console.log(order);
  
    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"))
      await setDoc(newOrderRef, order)
      return newOrderRef
    }
  
    createOrderInFirestore()
     .then(result => alert('Invesment created successfully. Id number ' + result.id))
     .then (clearCart())
     .catch(error => alert(error))
    }

  if(cart.length === 0) {
    return(
      <div className='emptyCart'>
        <p>Empty cart...</p>
        <Link className='emptyCart-shop' to='/'>
          <button className='btn btn-primary'>Take ACTIONS</button>        
        </Link>
      </div>
    );

  }

  return (
    <div className='cartList'>
      {
        cart.map(project => <ItemCart key={project.id} project={project}/> )
      }
      <p>
        Total: USD {totalPrice()}
      </p>
      <button className='btn btn-primary' onClick={buyClick}>Make invesment</button>
      <button className='btn btn-danger' onClick={() => clearCart()}>Cancel invesment</button>
    </div>
  );
}

export default Cart;