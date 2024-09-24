import React from 'react'
import '../styles/itemlistcontainer.css'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='container'>
        <span>{greeting}</span>
    </div>
  )
}

export default ItemListContainer
