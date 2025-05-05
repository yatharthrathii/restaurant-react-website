import React from 'react';
import './MealItemForm.css';

const MealItemForm = () => {
  return (
    <form className="form">
      <div className="input">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        />
      </div>
      <button type="button">+ Add</button>
    </form>
  );
};

export default MealItemForm;
