/*!
Data Created On: Wednesday, August 3, 2022 [1:36 PM]
=========================================================
* Default Dashboard Test Template - v1.0.0
=========================================================

* Copyright 2022
* Licensed under MIT (https://github.com/abriilo/dashboard-test-template/blob/master/LICENSE.md)
* Coded by:  Abraham Mitiku

=========================================================

*
*/
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getCookie } from "../utils/Cookies";
import { getLocalStorage } from "../utils/Storage";

const PrivateRoute = ({ children }) => {
  let refresh = getCookie("refresh");
  let access = getLocalStorage("access");
  let location = useLocation();

  //if (!(refresh && access)) {
     //redirecting to login page
  //  return <Navigate to="/" state={{ from: location }} replace />;
  //}
  return children;
};

export default PrivateRoute;
