// src/store/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [], // All recipes
  searchTerm: '',

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); // Trigger filtering whenever search term updates
  },

  filteredRecipes: [],

  setRecipes: (recipes) => {
    set({ recipes, filteredRecipes: recipes }); // initial population
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  }
filterByIngredient: (ingredient) => {
  const { recipes } = get();
  const filtered = recipes.filter(recipe =>
    recipe.ingredients?.some(i =>
      i.toLowerCase().includes(ingredient.toLowerCase())
    )
  );
  set({ filteredRecipes: filtered });
},
,
}));

