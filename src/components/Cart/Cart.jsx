import Modal from '../UI/Modal';
import './Cart.css';

const Cart = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className="cart">
        <h2>Sushi</h2>
        <div className="summary">
          <span>Total Amount</span>
          <span>₹35.62</span>
        </div>
        <div className="actions">
          <button className="button--alt" onClick={props.onClose}>Close</button>
          <button className="button">Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;