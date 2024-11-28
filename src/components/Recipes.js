import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await axios.get('http://localhost:5000/api/recipes');
      setRecipes(res.data);
    };
    fetchRecipes();
  }, []);

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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
