import '../styles/itemDetail.css';
import React from 'react'


export const ItemDetail = ({data}) => {
  return (
    <div className="card">
      {/* <img src={data.img} alt={data.title}/> */}
      <h2>{data.title}</h2>
      <p>Risk: {data.risk}</p>
      <p>APY: {data.anualReturn}</p>
      <p><strong>USD ${data.price}</strong></p>
    </div>
  );
}


export default ItemDetail;