import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo(props => {
  // use array destructuring, where inputState - our data and setInputState - our function to set new data.
  // const [inputState, setInputState] = useState({ name: "", amount: "" });
  // or manage multi state
  const [enterName, setEnterName] = useState('');
  const [enterAmount, setEnterAmount] = useState('');
  
  const submitHandler = event => {
    event.preventDefault();
    props.onAddIngredient({name: enterName, amount: enterAmount});
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={enterName}
              onChange={event => {
                setEnterName(event.target.value)
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={enterAmount}
              onChange={event => {
              setEnterAmount(event.target.value)
              }}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
