import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Inico from './Pages/Inico/Inico';
import Nosotros from './Pages/Nosotros/Nosotros';
import Products from './Pages/Products/Products';
import Carro from './Pages/Carro/Carro';
import Item from './Components/Item/Item';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Inico/>}  />
        <Route path='/Nosotros' element={<Nosotros/>}  />
        <Route path='/Products' element={<Products/>}  />
        <Route path='/Carro' element={<Carro/>}  />
        <Route path='/Products/:itemId' element={<Item/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
