import React, { useState } from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000/api';


const AddRecipe = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [category, setCategory] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [servings, setServings] = useState('');
  const [picture, setPicture] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const res = await axios.post(
        'http://localhost:5000/api/recipes',
        {
          title,
          ingredients: ingredients.split(','),
          instructions,
          category,
          prepTime,
          cookTime,
          servings,
          picture,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Recipe added successfully!');
    } catch (err) {
      console.error(err); // Logs any error to the console
      alert('Failed to add recipe.');
    }
  };


  return (
    <div className="col-md-6 mx-auto">
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Ingredients (comma-separated)</label>
          <input
            type="text"
            className="form-control"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Instructions</label>
          <textarea
            className="form-control"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label>Category</label>
          <input
            type="text"
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Preparation Time</label>
          <input
            type="text"
            className="form-control"
            value={prepTime}
            onChange={(e) => setPrepTime(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Cooking Time</label>
          <input
            type="text"
            className="form-control"
            value={cookTime}
            onChange={(e) => setCookTime(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Servings</label>
          <input
            type="text"
            className="form-control"
            value={servings}
            onChange={(e) => setServings(e.target.value)}
            required
          />
        </div>
        <div class="mb-3">
          <label for="formFile" class="form-label">Image</label>
          <input class="form-control" type="file" id="formFile" />
        </div>
        <button type="submit" className="btn btn-primary">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
