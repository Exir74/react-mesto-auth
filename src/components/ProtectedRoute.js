import React from "react";
import {Link, Navigate} from "react-router-dom";

function ProtectedRouteElement({element: Component, ...props}) {
  if (Component !== '') {
   return  (props.isLoggedIn ? <Component {...props}/> : <Navigate to='/sign-in' replace/>)
  } else {
     return (props.isLoggedIn ? '' : <Navigate to='/sign-in' replace/>)
  }
}

export default ProtectedRouteElement