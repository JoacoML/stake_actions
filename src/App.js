import '../src/styles/App.css';
import NavBar from './components/NavBar';
import ItemListConteiner from './conteiners/ItemListConteiner';

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <ItemListConteiner greeting="welcome to Actions"/>
      
    </div>
  );
}

export default App;
