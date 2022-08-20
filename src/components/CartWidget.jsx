import carrito from '../assets/img/carrito.png';
import { useCartContext } from '../context/CartContext';


export const CartWidget = () => {

  const {totalProjects} = useCartContext();

  return (
    <div className='cart__widget'> 

      <span>{totalProjects() || ''}</span>

      <button className="btn btn-light">
        <img src={carrito} alt="widget carrito" />
      </button>
      
    </div>
  );
}

export default CartWidget;