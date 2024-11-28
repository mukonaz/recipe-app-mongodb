import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Recipes from './components/Recipes';
import AddRecipe from './components/AddRecipe';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route
            path="/add-recipe"
            element={
              <PrivateRoute>
                <AddRecipe />
              </PrivateRoute>
            } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import AddRecipe from './components/AddRecipe';
// 

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route
//           path="/add-recipe"
//           element={
//             <PrivateRoute>
//               <AddRecipe />
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
