import ProductsList from './views/ProductsList/ProductsList'
import ProductDetails from './views/ProductDetails/ProductDetails'
import { Route } from 'wouter';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Route path="/" component={() => <ProductsList />}/>     
      <Route path="/product/:id" component={() => <ProductDetails />}/>
    </div>
  );
}

export default App;
