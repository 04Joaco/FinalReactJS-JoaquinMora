import React from 'react'
import {items} from '../../Helpers/Items'
import { Link } from 'react-router-dom'
import './productos.css'

const Products = () => {
  return (
    <>

    <div className='title' style={{ display: 'flex', justifyContent: 'center' }}>
      <h3>Productos</h3>
    </div>
    {
      items.map((item) => {
        return (
          <div className='listado-pro'>
            <Link to={`/products/${item.id}`}>{item.producto}</Link> 
          </div>
        )
      }
      )
    }
    </>
  )
}

export default Products