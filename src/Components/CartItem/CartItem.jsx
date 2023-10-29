import React from 'react'
import './estilo.css'

const CartItem = ({item}) => {
  return (
    <div className='Cart-inicial'>
        <div className='texto'>
        <p>Item: {item.titulo}</p>
        <p>Precio: {item.precio}</p>
        <p>Almacenamiento: {item.almacenamiento}</p>
        <p>Color: {item.color}</p>
        <p>Cantidad: {item.quantity}</p>
        </div>
    </div>
  )
}

export default CartItem