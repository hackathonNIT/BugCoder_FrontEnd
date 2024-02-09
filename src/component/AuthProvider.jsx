import React, { createContext, useContext, useState } from 'react';
import LoginPage from './LoginPage';
import { NavLink, useNavigate,Navigate } from 'react-router-dom';
const AuthContext = createContext();
const AuthProvider = ({children}) => {
  const navigate=useNavigate();
  const [authenticated,setAuthenticated] = useState(false);

  function login () {
    setAuthenticated(true);
  }
  function logout () {
    setAuthenticated(false);
    navigate("/login");
  }
  const userid="";
  const auth = {
    authenticated,
    login,
    logout,
    userid,
  }

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const context = useContext(AuthContext);
  console.log(context)
  return context;
};



export {AuthProvider,useAuth}