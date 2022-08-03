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

/**
 *  Importing View Components [Pages] , Layouts && Routes
 */

 import React, { Suspense } from "react";

 /**
  *  spinners or backdrop
  */
 import MainBackdrop from "../components/layouts/spinners/Backdrop";
 
 /**
  * Public Views
  * !Public view pages should be imported here and add with public view categories
  */
 const Login = React.lazy(() => import("../components/views/auth/Login"));

 // not found pages
 const NotFound = React.lazy(() => import("../components/views/404/NotFound"));
 
 /**
  * Private Views
  * Authorized pages [views] should be imported here and add with private view categories
  */
 const Dashboard = React.lazy(() =>
   import("../components/views/private/dashboard/Dashboard")
 );


 
 /**
  *  Layouts [Private, Public]
  *  Contains - [Outlet, Navigations ... etc]
  */
 const PrivateLayout = React.lazy(() =>
   import("../components/layouts/PrivateLayout")
 );
 const PublicLayout = React.lazy(() =>
   import("../components/layouts/PublicLayout")
 );
 
 /**
  *  Authorized Routes [PrivateRoute]
  *  Checks whether personel is authorized or not ... or will redirect to login page ...
  *  You can change authorization methods for pages [views] here from [PrivateRoute]
  */
 const PrivateRoute = React.lazy(() => import("./PrivateRoute"));
 
 const routes = [
   /**
    *  Public Views
    *  Directories:
    *  Views -> Auth -> [Login, Register
    */
   {
     path: "/",
     element: (
       <Suspense fallback={<MainBackdrop  />}>
         <PublicLayout />
       </Suspense>
     ),
     children: [
       { index: true, element: <Login /> },
     ],
   },
   /**
    *
    */
   {
     path: "*",
     element: <NotFound />,
   },
   /**
    *  Private Views
    *  Directories:
    *  Views -> Private -> [Dashboard, Profile, ... etc]
    */
   {
     path: "/user",
     element: (
       <Suspense fallback={<MainBackdrop />}>
         <PrivateLayout />
       </Suspense>
     ),
     children: [
       {
         index: true,
         element: (
           <PrivateRoute>
             <Dashboard />
           </PrivateRoute>
         ),
       },
       {
        path: "*",
        element: <Dashboard />,
      },
     ],
   },
 ];
 export default routes;
 