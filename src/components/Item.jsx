import '../styles/item.css';
import React from 'react'

const Item = ({info}) => {
  return (
    <div className='itemCard'>
        <div>{info.title}</div>
        <div>{info.price}</div>
        <div>{info.risk}</div>
    </div>
  );
}

export default Item;