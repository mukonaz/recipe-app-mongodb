import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Recipe App
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            {!isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/add-recipe">
                    Add Recipe
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/recipe">
                    Recipe
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link" onClick={logout}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
