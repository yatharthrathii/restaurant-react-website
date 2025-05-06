import { useContext } from 'react';
import Modal from '../UI/Modal';
import './Cart.css';
import CartContext from '../../store/CartContext';

const Cart = (props) => {
  const cartCtx = useContext(CartContext); 
  const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;

  return (
    <Modal onClose={props.onClose}>
      <div className="cart">
        <ul>
          {cartCtx.items.map((item) => (
            <li key={item.id}>
              {item.name} x {item.amount} — ₹{(item.price * item.amount).toFixed(2)}
            </li>
          ))}
        </ul>
        <div className="summary">
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className="actions">
          <button className="button--alt" onClick={props.onClose}>Close</button>
          {cartCtx.items.length > 0 && <button className="button">Order</button>}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
