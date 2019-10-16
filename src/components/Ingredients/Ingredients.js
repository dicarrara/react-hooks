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
  return (
    <div className="App">
      {/* passing addIngredient to ingredient form component */}
      <IngredientForm onAddIngredient = {addIngredient}/>

      <section>
        <Search />
        <IngredientList ingredients = {userIngredient} onRemoveItem={() => {}}/>
        {/* Need to add list here! */}
      </section>
    </div>
  );
}

export default Ingredients;
