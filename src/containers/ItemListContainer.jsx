import '../styles/itemListContainer.css';
import projectStock from '../data/stock.json';
import React, { useState, useEffect } from 'react';
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
  
  const [projectList, setProjectList] = useState([])

  const {typeId} = useParams();

  useEffect(() =>{
    const getProjectList = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(projectStock);
      }, 1000);
    });
    if (typeId) {
      getProjectList.then(res => setProjectList(res.filter(project => project.type === typeId)));  
    }else{
      getProjectList.then(res => setProjectList(res));
    }
    
  },[typeId])
  
  return (
    <div className='itemListContainer'>
      <p>{greeting}</p>
      <ItemList projectList={projectList}/>
    </div>
  );
};

export default ItemListContainer;