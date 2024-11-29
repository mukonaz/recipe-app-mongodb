import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [editingRecipe, setEditingRecipe] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [recipeToDelete, setRecipeToDelete] = useState(null);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/recipes');
      setRecipes(res.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/recipes/${id}`);
      setRecipes(recipes.filter((recipe) => recipe._id !== id));
      setShowDeleteConfirm(false);
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  const handleEditSubmit = async (updatedRecipe) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/recipes/${updatedRecipe._id}`, updatedRecipe);
      setRecipes(recipes.map((recipe) => (recipe._id === updatedRecipe._id ? res.data : recipe)));
      setEditingRecipe(null);
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };

  return (
    <div>
      <h2>Recipes</h2>
      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-4" key={recipe._id}>
            <div className="card mb-3">
              <div className="card-body">
                <h5>{recipe.title}</h5>
                <p>{recipe.category}</p>
                <small>{recipe.ingredients.join(', ')}</small>
                <div className="mt-3">
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => setEditingRecipe(recipe)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      setShowDeleteConfirm(true);
                      setRecipeToDelete(recipe);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowDeleteConfirm(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this recipe?</p>
                <strong>{recipeToDelete?.title}</strong>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowDeleteConfirm(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(recipeToDelete._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editingRecipe && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Recipe</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setEditingRecipe(null)}
                ></button>
              </div>
              <div className="modal-body">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleEditSubmit(editingRecipe);
                  }}
                >
                  <div className="mb-3">
                    <label>Title</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editingRecipe.title}
                      onChange={(e) =>
                        setEditingRecipe({ ...editingRecipe, title: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label>Category</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editingRecipe.category}
                      onChange={(e) =>
                        setEditingRecipe({ ...editingRecipe, category: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label>Ingredients (comma-separated)</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editingRecipe.ingredients.join(', ')}
                      onChange={(e) =>
                        setEditingRecipe({
                          ...editingRecipe,
                          ingredients: e.target.value.split(',').map((ing) => ing.trim()),
                        })
                      }
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recipes;
