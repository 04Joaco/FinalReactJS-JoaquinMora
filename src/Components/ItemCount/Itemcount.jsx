import React from 'react'
import { useState } from 'react'
import './estilo.css'


const Itemcount = ({stock, initial, onAdd}) => {
  const [quantity, setQuantity] = useState(initial)

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity+1)
    }
  }

  const decrement = () => {
    if(quantity > 1){
      setQuantity(quantity-1)
    }
  }

  return(
    <div className='Counter'>
      <div className='Controls'>
        <button className='Buttons' onClick={decrement}>-</button>
        <h4 className='Number'>{quantity}</h4>
        <button className='Buttons' onClick={increment}>+</button>
      </div>
      <div className='cart-carrito'>
        <button className='Button' onClick={() => onAdd(quantity)} disabled={!stock}>
          Agregar al carrito
        </button>
      </div>

    </div>
  )


}

export default Itemcount;