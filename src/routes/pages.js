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
// icons
import NotificationsIcon from "@mui/icons-material/Notifications";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from '@mui/icons-material/Settings';

// change public page & private pages names and paths according for navigation
export const publicPages = [
    {
      _id: 1,
      path: `/`,
      name: `Login`,
    },
];

export const privatePages = [
  {
    _id: 1,
    path: `/user`,
    name: `Dashboard`,
    icon: <DashboardIcon sx={{fontSize:23}}/>,
  },
  {
    _id: 2,
    path: `/user`,
    name: `Message`,
    icon:  <EmailIcon sx={{fontSize:23}}/>,
  },
  {
    _id: 3,
    path: `/user`,
    name: `Notification`,
    icon: <NotificationsIcon sx={{fontSize:23}}/>,
  },


  /// for bottom sidebar pages
  {
  _id: 4,
  path: `/user`,
  name: `Settings`,
  icon: <SettingsIcon sx={{fontSize:23}}/>,
  },

];