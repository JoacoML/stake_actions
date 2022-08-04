import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/cartWidget.css';
import carrito from '../assets/img/carrito.png';
import { useCartContext } from '../context/CartContext';


export const CartWidget = () => {

  const {totalProjects} = useCartContext();

  return (
    <div className='cartWidget'> 

      <span>{totalProjects() || ''}</span>

      <button className="btn">
        <img src={carrito} className="" alt="widget carrito" />
      </button>
      
    </div>
  );
}

export default CartWidget;