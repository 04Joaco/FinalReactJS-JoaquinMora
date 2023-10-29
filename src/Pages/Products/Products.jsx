import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const Products = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const itemCollection = collection(db, "items");
        const data = await getDocs(itemCollection);
        const itemsData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProductos(itemsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const productListStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const productLinkStyle = {
    textDecoration: 'none',
    color: '#600', 
    display: 'block',
    padding: '8px 0',
  };

  return (
    <div style={productListStyle}>
      <div className='title' style={{ display: 'flex', justifyContent: 'center' }}>
        <h3>Productos</h3>
      </div>
      {
        productos.map((item) => (
          <div className='listado-pro' key={item.id}>
            <Link to={`/products/${item.id}`} style={productLinkStyle}>{item.titulo}</Link>
          </div>
        ))
      }
    </div>
  );
};

export default Products;