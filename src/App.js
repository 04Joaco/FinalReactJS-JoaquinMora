import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Inico from './Pages/Inico/Inico';
import Nosotros from './Pages/Nosotros/Nosotros';
import Products from './Pages/Products/Products';
import Carro from './Pages/Carro/Cart';
import Item from './Components/Item/Item';
import { CartProvider } from './Context/CartContext'

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Inico/>}  />
        <Route path='/Nosotros' element={<Nosotros/>}  />
        <Route path='/Products' element={<Products/>}  />
        <Route path='/Cart' element={<Carro/>}  />
        <Route path='/Products/:itemId' element={<Item/>}/>
      </Routes>

    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
