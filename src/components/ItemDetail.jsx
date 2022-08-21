import React, { useState } from 'react'
import { useCartContext } from '../context/CartContext';
import ItemCount from '../components/ItemCount';
import { Link } from 'react-router-dom';


export const ItemDetail = ({data}) => {
  const [goToCart, setGotoCart] = useState(false)
  const { addProject } = useCartContext();

  const onAdd = (quantity) => {
    setGotoCart(true);
    addProject(data, quantity);
    alert('Successfully added to cart.');
  }

  return (
    <div className="card__detail">
      <img className='card-img' src={data.img} alt={data.title}/>
      <h2 className='card-title'>{data.title}</h2>
      <h2 className='card-description'>{data.description}</h2>
      <div className='card-info'>
        <div className='card-text'>
          <p>Risk: {data.risk}</p>
          <p>APY: {data.anualReturn}</p>
          <p><strong>USD ${data.price}</strong></p>
          <p className='text-muted' >Stocks available: {data.stock}</p>
        </div>
        {
          goToCart
            ? <Link to='/cart'>
                <button className='card-finish btn btn-primary'>Finish invesment</button>
              </Link>
            : <ItemCount initial={1} stock={data.stock} onAdd={onAdd}/>
        }
      </div>
    </div>
  );
}


export default ItemDetail;