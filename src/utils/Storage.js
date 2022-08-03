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
// setting localStorage data's
export const setLocalStorage = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
};
// getting localStorage data's
export const getLocalStorage = (key) => {
    const value = window.localStorage.getItem(key);
    if (value) return JSON.parse(value);
};
//removing localStorage data's
export const removeLocalStorage = (key) =>{
    window.localStorage.removeItem(key);
}
  