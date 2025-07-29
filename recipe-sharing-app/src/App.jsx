import { Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <div className="App">
      <h1>🍽️ Recipe Sharing App</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Router>
        <Router
          path="/"
          element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />
        <Router path="/recipes/:id" element={<RecipeDetails />} />
      </Router>
    </div>
  );
}

export default App;

