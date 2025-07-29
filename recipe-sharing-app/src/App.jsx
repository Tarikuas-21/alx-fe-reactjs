import React, { useEffect } from 'react';
import { useRecipeStore } from './store/recipeStore';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';

const sampleRecipes = [
  { title: 'Pasta Bolognese', description: 'Classic Italian dish', ingredients: ['beef', 'pasta'] },
  { title: 'Chicken Curry', description: 'Spicy and flavorful', ingredients: ['chicken', 'curry'] },
  // Add more sample data...
];

const App = () => {
  const setRecipes = useRecipeStore(state => state.setRecipes);

  useEffect(() => {
    // Simulate API call
    setRecipes(sampleRecipes);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recipe Finder</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
};

export default App;
