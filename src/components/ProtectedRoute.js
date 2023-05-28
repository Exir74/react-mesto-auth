import React from "react";
import {Navigate} from "react-router-dom";

function ProtectedRouteElement({element: Component, ...props}) {
  if (Component !== 0) {
   return  (props.isLoggedIn ? <Component {...props}/> : <Navigate to='/sign-in' replace/>)
  } else {
     // return (props.isLoggedIn ? '' : <Navigate to='/sign-in' replace/>)
  }
//   return (
//     props.isLoggedIn ? <Component {...props}/> : <Navigate to='/sign-in' replace/>
// )
}

export default ProtectedRouteElement