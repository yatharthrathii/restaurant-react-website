import './AvailableMeals.css';
import MealItemForm from './MealItemForm';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  return (
    <section className="meals">
      <ul>
        {DUMMY_MEALS.map((meal) => (
          <li key={meal.id} className="mealItem">
            <div>
              <h3>{meal.name}</h3>
              <p className="description">{meal.description}</p>
              <span className="price">${meal.price.toFixed(2)}</span>
            </div>
            <MealItemForm />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AvailableMeals;
