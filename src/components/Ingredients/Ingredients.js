import React, {useState} from 'react';
import IngredientList from './IngredientList';
import IngredientForm from './IngredientForm';
import Search from './Search';

const Ingredients = () => {
  const [userIngredient, setUserIngredient] = useState ([]);
  // define functional component
  const addIngredient = ingredient => {
    setUserIngredient(prevIngredients => 
      [...prevIngredients, 
        {id: Math.random().toString(), ...ingredient}
      ]);

  }

  // define function to delete ingredients, pass id as a argument, so we not what to remove
  const deleteIngredientsHandler = ingredientId => {
    // to update ingredients we will call for setUserIngr function,
    // the goal will be to get updated array without clicked element
    setUserIngredient(prevIngredients => prevIngredients.filter((ingredient) => ingredient.id !== ingredientId))

  }

  return (
    <div className="App">
      {/* passing addIngredient to ingredient form component */}
      <IngredientForm onAddIngredient = {addIngredient}/>

      <section>
        <Search />
        <IngredientList ingredients = {userIngredient} onRemoveItem={deleteIngredientsHandler}/>
        {/* Need to add list here! */}
      </section>
    </div>
  );
}

export default Ingredients;
