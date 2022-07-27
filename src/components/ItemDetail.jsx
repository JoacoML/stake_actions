import '../styles/itemDetail.css';
import React, { useState } from 'react'
import ItemCount from '../components/ItemCount';
import { Link } from 'react-router-dom';

export const ItemDetail = ({data}) => {
  const [goToCart, setGotoCart] = useState(false)

  const onAdd = (quantity) => {
    setGotoCart(true);
  }

  return (
    <div className="card">
      {/* <img src={data.img} alt={data.title}/> */}
      <h2>{data.title}</h2>
      <p>Risk: {data.risk}</p>
      <p>APY: {data.anualReturn}</p>
      <p><strong>USD ${data.price}</strong></p>
      {
        goToCart
          ? <Link to='/cart'>Finish invesment</Link>
          : <ItemCount initial={1} stock={10} onAdd={onAdd}/>
      }
    </div>
  );
}


export default ItemDetail;