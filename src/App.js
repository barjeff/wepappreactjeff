
import './App.css';
import ItemListContainer from './componentes/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavSearch from './componentes/Navsearch';
import { CartProvider } from './componentes/CartContex';
import CartContenedor from './componentes/CartContenedor';
import Checkout from './componentes/Checkout';
import Login from './componentes/Login';
import Register from './componentes/Register';
import Ingreso from './componentes/Ingreso';
import { ProtectedRoute } from './componentes/ProtectedRoute';
import Footer from './componentes/Footer';



function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavSearch />
          <Routes>
            <Route path='/ingreso' element={<Ingreso />}/>
            <Route path='/' element={< ItemListContainer />}/>
            <Route path='/categoria/:categoriaid' element={< ItemListContainer />}/>
            <Route path='/detail/:detailProductid' element={< ItemDetailContainer />} />
            <Route path='/carrito' element={< CartContenedor />} />
            <Route path='/checkout' element={
            <ProtectedRoute>
            < Checkout /> 
            </ProtectedRoute>
          }/>
          </Routes>
          < Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
