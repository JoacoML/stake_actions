import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import carrito from '../assets/img/carrito.png';


export const CartWidget = () => {
  return (
    <div className='cartWidget'> 

      <button className="btn botonCarrito" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <img src={carrito} className="" alt="widget carrito" />
      </button>
      
    </div>
  );
}

export default CartWidget;