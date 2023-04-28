import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    console.log(location);
    if (loading) {
       return <Spinner animation="grow" variant="warning" />
    }
    
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;
/* 
1. check user is logged in or not.
2. if user is logged in then allow them to visit the route.
3. else redirect the user to the login page.
4. set up the private router.
5. handle loading
*/
