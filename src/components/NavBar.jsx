import 'bootstrap/dist/css/bootstrap.min.css';
import home_logo from '../assets/img/home_logo.png';
import CartWidget from './CartWidget';
import '../styles/App.css';

export const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light fixed-top botonera">
        <div className="container botonera-desc">
          
          <a className="navbar-brand" href="../public/index.html">
            <img src={home_logo} className="botonera__logo" alt="logo" />
          </a>

        </div>

        <CartWidget/>
      </nav>

    </div>
  );
}

export default NavBar;