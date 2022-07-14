import 'bootstrap/dist/css/bootstrap.min.css';
import home_logo from '../assets/img/home_logo.png';
import CartWidget from './CartWidget';
import '../styles/navBar.css';

export const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm fixed-top navBar">
        <div className="container navBar-conteiner">
          
          <a className="navbar-brand" href="../public/index.html">
            <img src={home_logo} className="navBar__logo" alt="logo"/>
          </a>

        </div>

        <CartWidget/>
      </nav>

    </div>
  );
}

export default NavBar;