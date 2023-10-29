import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import './estilos-item.css';
import Itemcount from '../ItemCount/Itemcount.jsx'
import { CartContext } from '../../Context/CartContext';





const Item = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);


  //  ------------------------------------------------------------------- sumar al carrito


  const [quantityAdded, setQuantityAdded] = useState('')
  const {addItem} = useContext(CartContext)


const onAdd = (cantidad) => {
  setQuantityAdded(cantidad)
  addItem(product, cantidad)
}



  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const db = getFirestore();
        const itemRef = doc(db, "items", itemId);
        const itemSnap = await getDoc(itemRef);

        if (itemSnap.exists()) {
          setProduct({ id: itemSnap.id, ...itemSnap.data() });
        } else {
          console.log("No existe el producto con el ID proporcionado");
          // Puedes manejar el caso de un producto no encontrado aquí
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    fetchProduct();
  }, [itemId]);

  if (!product) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh' /* Ocupar toda la altura de la pantalla */
      }}>
        <h2 style={{ fontSize: '24px', color: '#333' }}>Cargando...</h2>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{product.titulo}</h2>
          <p className="card-text"><strong>Almacenamiento:</strong> {product.almacenamiento}</p>
          <p className="card-text"><strong>Color:</strong> {product.color}</p>
          <p className="card-text"><strong>Precio:</strong> {product.precio}</p>
          <p className="card-text"><strong>Stock:</strong> {product.stock}</p>
          { quantityAdded === '' ?     <Itemcount initial={1} stock={product.stock} onAdd={onAdd} />
            :  <Link to='/cart'>Ir al carrito</Link>  }
        </div>
      </div>
    </div>
  );
};

export default Item;