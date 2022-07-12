import React from 'react';
import ItemCount from '../components/ItemCount'
import '../styles/App.css';

const ItemListConteiner = ({greeting}) => {
  
  const onAdd = (param) => {console.log(param)}
  
  return (
    <div className='itemListConteiner'>
      <p>{greeting}</p>
      <ItemCount initial={1} stock={10} onAdd={onAdd}/>
    </div>
  )
}

export default ItemListConteiner;