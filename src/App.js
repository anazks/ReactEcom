import logo from './logo.svg';
import './App.css';
import Header from './Componets/Header/Header';
import Banner from './Componets/Benner/Banner';
import Products from './Componets/Products/Products';
import Cart from './Componets/Cart/Cart';
function App() {
  return (
    <div className="App">
        <Header/>
        <Banner/>
        <Products/>
        <Products/>
        <Cart/>
    </div>
  );
}

export default App;
