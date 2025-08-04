import { Router, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App" style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h1>🍽️ Recipe Sharing App</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Router>
        <Route
          path="/"
          element={
            <>
              <SearchBar />
              <AddRecipeForm />
              <RecipeList />
              <RecipeDetails/>
            </>
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Router>
    </div>
  );
}

export default App;
