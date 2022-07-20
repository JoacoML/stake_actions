import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/itemDetail.css';


export const ItemDetail = ({data}) => {
  return (
    <div className="card m-3">
      <img className="" src={data.image} alt={data.title}/>
      <h2 className="">{data.title}</h2>
      <p className="">Risk: {data.risk}</p>
      <p className="">APY: {data.anualReturn}</p>
      <p className=""><strong>USD ${data.price}</strong></p>
    </div>
  );
}

export default ItemDetail;