import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
  
  const [projectList, setProjectList] = useState([]);
  const {typeId} = useParams();

  useEffect(() =>{
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'projects');
    if (typeId) {
      const queryFilter = query(queryCollection, where('type', '==', typeId))
      getDocs(queryFilter)
        .then(res => setProjectList(res.docs.map(project => ({ id: project.id, ...project.data() }))));  
    }else{
      getDocs(queryCollection)
        .then(res => setProjectList(res.docs.map(project => ({ id: project.id, ...project.data() }))));
    }    
  },[typeId])
  
  return (
    <div className='projectsList'>
      <p>{greeting}</p>
      <ItemList projectList={projectList}/>
    </div>
  );
};

export default ItemListContainer;