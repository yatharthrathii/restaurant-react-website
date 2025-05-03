import './Header.css';

const Header = () => {
  return (
    <>
      <header className="header">
        <h1>ReactMeals</h1>
        <button className="cart-button">
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