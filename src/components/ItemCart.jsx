import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/itemCart.css';
import { useCartContext } from '../context/CartContext';

const ItemCart = ({project}) => {
  const { deleteProject } = useCartContext()
  return (
    <div className='itemCart'>
        <img src={project.img} alt={project.title} />
        <div>
            <p>{project.title}</p>
            <p>APY: {project.anualReturn}</p>
            <p>Stock n: {project.quantity}</p>
            <p>Value: {project.price}</p>
            <p>Invesment: {project.quantity * project.price}</p>
            <button className='btn' onClick={() => deleteProject(project.id)}>Delete</button>
        </div> 
    </div>
  )
}

export default ItemCart