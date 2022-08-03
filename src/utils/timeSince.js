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
const timeSince = (date) =>{

    var seconds = Math.floor((new Date() - date) / 1000);
  
    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes ago";
    }
    return " now";
};

export default timeSince;