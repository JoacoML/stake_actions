import React from 'react'
import Item from './Item'

const ItemList = ({projectList = []}) => {
  return (
    projectList.map(project => <Item key={project.id} info={project}/> )
  );
}

export default ItemList;