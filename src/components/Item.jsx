import React from 'react'
import { Link } from 'react-router-dom';



const Item = ({info}) => {
  return (
    <Link className='link' to = {`/detail/${info.id}`}>
      <div className='card'>
        <img src={info.img} alt={info.title} className="card-img-top"/> 
        <div className="card-body">
          <h2 className="card-title">{info.title}</h2>
          <div className="card-text">Stock price: USD {info.price}</div>
          <div className="card-text">Risk: {info.risk}</div>
          <div className="card-text">APR: {info.anualReturn}</div>
          <p className="btn btn-dark">See more</p>
        </div>
      </div>
    </Link>
  );
}

export default Item;