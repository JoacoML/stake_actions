import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import CartProvider from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/mainStyles.scss'

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/type/:typeId' element={<ItemListContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/detail/:detailId' element={<ItemDetailContainer/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
