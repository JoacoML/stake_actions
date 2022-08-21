import React, {useState, useEffect} from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from '../components/ItemDetail';
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = () => {

  const [data, setData] = useState({});
  const {detailId} = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'projects', detailId);
    getDoc(queryDoc)
      .then(res => setData({ id: res.id, ...res.data() }))
      .catch(error => alert(error))
  },[detailId]);
  
  return (
    <div className='projectsDetail'>
      <ItemDetail data={data}/>
    </div>
  );
};

export default ItemDetailContainer;