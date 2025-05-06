import React, { useRef, useState } from 'react';
import './MealItemForm.css';

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input">
        <label htmlFor={'amount_' + props.id}>Amount</label>
        <input
          id={'amount_' + props.id}
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
          ref={amountInputRef}
        />
      </div>
      <button type="submit">+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1–5).</p>}
    </form>
  );
};

export default MealItemForm;
