import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const showCartItem = useSelector(state => state.cart.showCart)
  return (
    <Layout>
     {showCartItem && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
