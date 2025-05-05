import './Header.css';

const Header = (props) => {
  return (
    <>
      <header className="header">
        <h1>ReactMeals</h1>
        <button className="cart-button" onClick={props.onShowCart}>
          <span className="cart-icon">🛒</span>
          <span>Your Cart</span>
          <span className="cart-badge">0</span>
        </button>
      </header>
      <div className="main-image">
        <img src="/header.webp" alt="Delicious food spread" />
      </div>
    </>
  );
};

export default Header;