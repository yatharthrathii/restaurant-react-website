// Header.jsx
import { useContext } from 'react';
import CartContext from '../store/CartContext'; 
import './Header.css';

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <>
      <header className="header">
        <h1>ReactMeals</h1>
        <button className="cart-button" onClick={props.onShowCart}>
          <span className="cart-icon">🛒</span>
          <span>Your Cart</span>
          <span className="cart-badge">{cartCtx.totalItems}</span> 
        </button>
      </header>
      <div className="main-image">
        <img src="/header.webp" alt="Delicious food spread" />
      </div>
    </>
  );
};

export default Header;