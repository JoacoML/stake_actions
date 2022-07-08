import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const ItemListConteiner = ({greeting}) => {
  return (
    <span className='conteiner-span'>{greeting}</span>
  );
}

export default ItemListConteiner;