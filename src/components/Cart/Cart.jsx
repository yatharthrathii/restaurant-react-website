// src/components/Cart/Cart.jsx
import Modal from '../UI/Modal';
import './Cart.css';

const Cart = () => {
  return (
    <Modal>
      <div className="cart">
        <h2>Sushi</h2>
        <div className="summary">
          <span>Total Amount</span>
          <span>₹35.62</span>
        </div>
        <div className="actions">
          <button className="[button--alt]">Close</button>
          <button className="button">Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
