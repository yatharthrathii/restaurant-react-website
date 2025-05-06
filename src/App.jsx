import { useState } from 'react';
import Header from './components/Header';
import MealsSummary from './components/MealsSummary';
import AvailableMeals from './components/AvailableMeals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <MealsSummary />
      <AvailableMeals />
    </CartProvider>
  );
}

export default App;
