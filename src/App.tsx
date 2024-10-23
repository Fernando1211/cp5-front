import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import { useTodoApi } from './Endpoints';
import {Target} from './Endpoints'


const App = () => {
  const { getCartTarget } = useTodoApi();
  const [cart, setCart] = useState<Target | null>(null);

  

  const fetchCart = async () => {
    const fetchedCart = await getCartTarget();
    setCart(fetchedCart);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="app-container">
      <Header cart={cart} fetchCart={fetchCart} />
      <Body fetchCart={fetchCart} setCart={setCart} />
      <Footer />
    </div>
  );
};

export default App;
