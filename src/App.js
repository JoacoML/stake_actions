import NavBar from './components/NavBar';
import ItemListConteiner from './conteiners/ItemListConteiner';
import './styles/app.css';

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <ItemListConteiner greeting="welcome to Actions"/>
      
    </div>
  );
}

export default App;
