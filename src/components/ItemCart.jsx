import React from 'react'
import { useCartContext } from '../context/CartContext';

const ItemCart = ({project}) => {
  const { deleteProject } = useCartContext()
  return (
    <div className='itemCart'>
        <img src={project.img} alt={project.title} />
        <div className='itemCart-body'>
          <p className='itemCart-title'>{project.title}</p>
          <p>APY: {project.anualReturn}</p>
          <p>Stock n: {project.quantity}</p>
          <p>Value: USD {project.price}</p>
          <p>Invesment: USD {project.quantity * project.price}</p>
          <button className='btn btn-secondary' onClick={() => deleteProject(project.id)}>Delete</button>
        </div> 
    </div>
  )
}

export default ItemCart