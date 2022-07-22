import React, {useState, useEffect} from 'react';
import ItemDetail from '../components/ItemDetail';
import '../styles/itemDetailContainer.css';

const project = { 
  id: "0", 
  title: "The ocean cleanup", 
  ticker: "TOCU", 
  price: 120, 
  risk: "AAA", 
  anualReturn: "15%", 
  cantidad: "1", 
  image: "../assets/img/project1.jpg",
};

export const ItemListContainer = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    const getData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(project);
      }, 300);
    });
    getData.then(res => setData(res));
  },[]);
  
  return (
    <div className='itemDetailContainer'>
      <ItemDetail data={data}/>
    </div>
  );
};

export default ItemListContainer;