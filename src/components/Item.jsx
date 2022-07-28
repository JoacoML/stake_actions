import '../styles/item.css';
import React from 'react'
import { Link } from 'react-router-dom';



const Item = ({info}) => {
  return (
    <Link to = {`/detail/${info.id}`} className='itemCard'>
      <div>{info.title}</div>
      <div>{info.price}</div>
      <div>{info.risk}</div>
    </Link>
  );
}

export default Item;