import './App.css';
import { NavBar } from './components/NavBar';
import {CartWidget} from './components/CartWidget';
import {MainLogo} from './components/MainLogo';

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <CartWidget/>
      <MainLogo/>

    </div>
  );
}

export default App;
