import React from 'react';
import '../styles/cart.css';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import ItemCart from './ItemCart';
import { doc, collection, setDoc } from 'firebase/firestore';
import  db from '../firebase/config'


export const Cart = () => {
  const {cart, totalPrice} = useCartContext();

  const buyClick = () => {

    const order = {
      buyer:{
        name: 'Jake',
        email: 'Jake@gmail.com',
        phone: '351123'
      },
  
      items: cart.map(project => ({ id: project.id, title: project.name, price: project.price, quantity: project.quantity })),
      total: totalPrice (),
    }
  
    console.log(order);
  
    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"))
      await setDoc(newOrderRef, order)
      return newOrderRef
    }
  
    createOrderInFirestore()
     .then(result => alert('Order created successfully ' + result.id))
     .catch(e => alert(e))
    }

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
      <button onClick={buyClick}>Make Invesment</button>
    </>
  );
}

export default Cart;