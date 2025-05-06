import { useContext } from 'react';
import CartContext from '../store/CartContext';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className="mealItem">
      <div>
        <h3>{props.name}</h3>
        <p className="description">{props.description}</p>
        <span className="price">{price}</span>
      </div>
      <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
    </li>
  );
};

export default MealItem;
