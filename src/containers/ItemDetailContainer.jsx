import '../styles/itemDetailContainer.css';
import projectStock from '../data/stock.json';
import React, {useState, useEffect} from 'react';
import ItemDetail from '../components/ItemDetail';
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = () => {

  const [data, setData] = useState({});

  const {detailId} = useParams();

  useEffect(() => {
    const getData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(projectStock);
      }, 300);
    });
    getData.then(res => setData(res.find(project => project.id === detailId)));
  },[]);
  
  return (
    <div className='itemDetailContainer'>
      <ItemDetail data={data}/>
    </div>
  );
};

export default ItemDetailContainer;