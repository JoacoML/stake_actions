import '../styles/item.css';
import React from 'react'
import { Link } from 'react-router-dom';



const Item = ({info}) => {
  return (
    <Link to = {`/detail/${info.id}`} className='itemCard'>
      <img src={info.img} alt={info.title}/>
      <div>{info.title}</div>
      <div>{info.price}</div>
      <div>{info.risk}</div>
    </Link>
  );
}

export default Item;