import React, { useContext} from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../../Components/CartItem/CartItem'

const Cart = () => {

  const {cart, total, clear} = useContext(CartContext)

  return (
    <div>
        {cart.length
          ? <div>
            {cart.map((item)=> <CartItem key={item.id} item={item} />)}
            <p style={{display: 'flex', justifyContent: 'center'}}>Total a pagar: ${total()}</p>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <button onClick={clear}>Vacias carrito</button>
              <button>Terminar de comprar</button>
            </div>
          </div> 
          : 
          <div>
            <h4>Tu carrito esta vacio!</h4>
            <Link to='/'>Ir a comprar</Link>
          </div>}
    </div>
  )
}

export default Cart