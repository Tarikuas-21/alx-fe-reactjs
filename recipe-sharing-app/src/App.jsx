// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import AddRecipeForm from './components/AddRecipeForm';
import FavoritesList from './components/FavoritesList';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <Router>
      <div>
        <h1>My Recipe App</h1>
        <SearchBar />
        <FavoritesList />

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
          <Route path="/add" element={<AddRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
