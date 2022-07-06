// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import carrito from './assets/img/carrito.png';
import home_logo from './assets/img/home_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-sm navbar-light fixed-top botonera">
        <div className="container botonera-desc">
          
          <a className="navbar-brand" href="../public/index.html">
            <img src={home_logo} className="botonera__logo" alt="logo" />
          </a>

          <button className="btn botonCarrito" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <p id="totalCarrito">0</p>
            <img src={carrito} className="" alt="widget carrito" />
          </button>

        </div>
      </nav>
    </div>
  );
}

export default App;


// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>