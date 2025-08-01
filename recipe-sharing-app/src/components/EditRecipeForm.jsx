timport { useState } from 'react';
import { useRecipeStore } from '../recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ ...recipe, title, description });
    alert('Recipe updated!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(e.target.value)}
        required
      />
      <br />
      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />
      <br />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditRecipeForm;
