import '../styles/itemListConteiner.css';
import projectStock from '../data/stock.json';
import ItemList from '../components/ItemList';
import React, { useState, useEffect } from 'react';
import ItemCount from '../components/ItemCount';

const ItemListConteiner = ({greeting}) => {
  
  const [projectList, setProjectList] = useState([])

  useEffect(() =>{
    const getProjectList = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(projectStock);
      }, 300);
    });
    getProjectList.then(res => setProjectList(res));
  

  },[])


  const onAdd = (param) => {console.log(param)}
  
  return (
    <div className='itemListConteiner'>
      <p>{greeting}</p>
      <ItemCount initial={1} stock={10} onAdd={onAdd}/>
      <ItemList projectList={projectList}/>
    </div>
  );
};

export default ItemListConteiner;