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

import axios from "axios";
import config from "../config/config";

import { getCookie } from "../utils/Cookies";
import { setLocalStorage } from "../utils/Storage";

const token = getCookie("refresh");

// creating instance
const instance = axios.create({
  baseURL: config.API_BASE_URL,
});
// intercepting every requests
instance.interceptors.request.use(async (config) => {
  // retreiving accessToken
  const accessToken = JSON.parse(window.localStorage.getItem("access"));
  config.headers.Authorization = `Bearer ${accessToken}`;
  config.headers.ContentType = "application/json";
  return config;
});

instance.interceptors.response.use(
  async (res) => {
    return res;
  },
  async (err) => {
    let originalConfig = err.config;
    //console.log(err.response, err.response.status);
    // if unAuthorized error is displayed renewtoken
    if (err.response.status === 401) {
      let payload = await instance
        .post(`renew_token_api_route/${token}`)
        .then((res) => {
          let { data } = res;
          //  console.log(data.access);
          return data.access;
        })
        .catch((err) => {
          return err;
        });
      // console.log(payload);
      setLocalStorage("access", payload);
      return instance(originalConfig);
    }
  }
);

export default instance;
