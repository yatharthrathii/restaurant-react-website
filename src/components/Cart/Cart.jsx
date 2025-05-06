import { useContext } from 'react';
import Modal from '../UI/Modal';
import './Cart.css';
import CartContext from '../../store/CartContext';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `₹${cartCtx.totalAmount <= 0 ? '0.00' : cartCtx.totalAmount.toFixed(2)}`;

  const addItemHandler = (id) => {
    cartCtx.addItem({ id, amount: 1, price: cartCtx.items.find(item => item.id === id).price });
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <Modal onClose={props.onClose}>
      <div className="cart">
        <ul>
          {cartCtx.items.map((item) => (
            <li key={item.id}>
              <div className="cart-item-details">
                <span>{item.name} x {item.amount} — ₹{(item.price * item.amount).toFixed(2)}</span>
                <div className="cart-item-actions">
                  <button onClick={() => removeItemHandler(item.id)}>-</button>
                  <button onClick={() => addItemHandler(item.id)}>+</button>
                </div>
              </div>
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
