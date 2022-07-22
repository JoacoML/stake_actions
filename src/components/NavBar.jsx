import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navBar.css';
import home_logo from '../assets/img/home_logo.png';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div>
      <nav className="navBar">
        <div className="container">
          <NavLink className="navbar-brand" to='/'>
            <img src={home_logo} className="navBar__logo" alt="logo"/>
          </NavLink>
        </div>

        <ul className='container nav_list'>
          <li>
            <NavLink className="nav_link" to='/type/water'>Water</NavLink>
          </li>
          <li>
            <NavLink className="nav_link" to='/type/recycling'>Recycling</NavLink>
          </li>
          <li>
            <NavLink className="nav_link" to='/type/energy'>Energy</NavLink>
          </li>
          <li>
            <NavLink className="nav_link" to='/cart'>
              <CartWidget/>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;