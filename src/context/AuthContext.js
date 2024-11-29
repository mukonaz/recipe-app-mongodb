import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); // Check if a token exists
  }, []);

  const logout = () => {
    localStorage.removeItem('token'); // Remove token
    setIsAuthenticated(false); // Update authentication status
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
