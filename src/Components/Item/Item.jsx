import React from 'react'
import { useParams } from 'react-router-dom'
import { getItemByid } from '../../Helpers/Items';


const Item = () => {
    const { itemId } = useParams()

    const product = getItemByid(itemId)
    
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <h3>Item: {product.producto}</h3>
          <h3>Price: {product.precio}</h3>
          <h3>Color: {product.color}</h3>
          <h3>Tamaño: {product.tamaño}</h3>
          <h3>Almacenamiento: {product.almacenamiento}</h3>
        </div>
      </div>
    );
}

export default Item