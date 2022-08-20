import home_logo from '../assets/img/home_logo.png';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="navBar fixed-top">
      <div>
        <NavLink to='/'>
          <img src={home_logo} className="navBar__logo" alt="logo"/>
        </NavLink>
      </div>

      <ul className='nav__list'>
        <li>
          <NavLink className="nav__link" to='/type/water'>Water</NavLink>
        </li>
        <li>
          <NavLink className="nav__link" to='/type/recycling'>Recycling</NavLink>
        </li>
        <li>
          <NavLink className="nav__link" to='/type/energy'>Energy</NavLink>
        </li>
        <li>
          <NavLink className="nav__cart" to='/cart'>
            <CartWidget/>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;