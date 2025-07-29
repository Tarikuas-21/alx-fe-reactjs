// src/components/RecipeList.jsx
import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {filteredRecipes.map((recipe, index) => (
        <div key={index} className="border p-4 rounded shadow">
          <h3 className="text-lg font-bold">{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
