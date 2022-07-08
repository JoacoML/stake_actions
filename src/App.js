import './App.css';
import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListConteiner';

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <ItemListConteiner greeting="welcome to Actions"/>
      
    </div>
  );
}

export default App;
