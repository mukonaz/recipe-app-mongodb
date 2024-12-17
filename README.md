Recipe App with Node.js, React, and MongoDB
Overview
This Recipe App allows users to:

Register and login to the application.
Add, edit, and delete recipes (authenticated users only).
View all recipes.
Easily manage recipes with a simple and intuitive interface.
Features
User Authentication: Register and login functionality with JWT authentication.
CRUD Recipes:
Create new recipes with a title, category, and ingredients.
Edit existing recipes.
Delete recipes with confirmation.
Conditional Navbar:
Login and Register options are hidden when logged in.
Logout is displayed when authenticated.
Responsive UI: Built with React and Bootstrap for a clean user interface.
Backend API:
Built with Node.js and Express.
Connected to MongoDB with Mongoose.
Tech Stack
Category	Technologies
Frontend	React, Bootstrap
Backend	Node.js, Express, Mongoose
Database	MongoDB Atlas
Authentication	JWT (JSON Web Token)
Project Setup
1. Prerequisites
Ensure you have the following installed:

Node.js (v14+)
MongoDB Atlas cluster setup
NPM or Yarn
2. Backend Setup
Open the terminal and navigate to the backend folder.
Install dependencies:
bash
Copy code
npm install
Create a .env file in the backend root and configure the following:
env
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Start the backend server:
bash
Copy code
npm run server
API Endpoints:

POST /api/auth/register - Register a new user.
POST /api/auth/login - Login a user.
GET /api/recipes - Get all recipes.
POST /api/recipes - Add a new recipe (protected route).
PUT /api/recipes/:id - Edit a recipe (protected route).
DELETE /api/recipes/:id - Delete a recipe (protected route).
3. Frontend Setup
Open the terminal and navigate to the frontend folder.

Install dependencies:

bash
Copy code
npm install
Start the React development server:

bash
Copy code
npm start
Update the API URL:

Open frontend/src/api.js or wherever you store API URLs.
Ensure the backend server's base URL is set:
javascript
Copy code
export const API_URL = 'http://localhost:5000/api';
4. Implementing Picture Upload
This section is a reminder to implement picture upload functionality. Here's what you need to do:

Backend (Express):
Install Multer to handle file uploads:
bash
Copy code
npm install multer
Set up a route to upload and store images.
Example of image upload route (to be implemented):

javascript
Copy code
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Temporary storage directory

app.post('/api/recipes/upload', upload.single('image'), (req, res) => {
  try {
    res.json({ message: 'Image uploaded successfully!', file: req.file });
  } catch (error) {
    res.status(500).json({ message: 'Image upload failed', error });
  }
});
Frontend (React):
Add an image input to your AddRecipe and EditRecipe components:

html
Copy code
<input
  type="file"
  onChange={(e) => setImage(e.target.files[0])} 
  accept="image/*"
/>
Use FormData to send the image file to the backend:

javascript
Copy code
const formData = new FormData();
formData.append('image', image);

const res = await axios.post('http://localhost:5000/api/recipes/upload', formData, {
  headers: { 'Content-Type': 'multipart/form-data' }
});
Display uploaded images in the recipe cards.

5. Run the App
Start the backend server:
bash
Copy code
npm run server
Start the frontend React app:
bash
Copy code
npm start
Open http://localhost:3000 in your browser.
6. Future Improvements
Implement Image Upload: Use Multer for backend and FormData for frontend (as described above).
Add Pagination: Paginate recipes for better performance.
Add Search/Filter: Allow users to search for recipes by title or category.
Screenshots
Reminder: Add screenshots of the app (e.g., login page, recipes page, edit modal).
