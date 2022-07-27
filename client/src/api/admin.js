import {BASE_PATH,APIVERSION} from "./config";

export function signInApi(data){
    const url =`${BASE_PATH}/${APIVERSION}/sign-in`
    const params={
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    };
    return fetch(url, params)
        .then(response =>{
            return response.json();
        })
        .catch(err=>{
            console.log(err);
        })
}


  
  export function getUsersApi(token) {
    const url = `${BASE_PATH}/${APIVERSION}/admin`;
  
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    };
  
    return fetch(url, params)
      .then(response => {
        return response.json();
      })
      .then(result => {
        return result;
      })
      .catch(err => {
        return err.message;
      });
  }
  
  export function getUsersActiveApi(token, status) {
    const url = `${BASE_PATH}/${APIVERSION}/admin-active?active=${status}`;
  
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    };
  
    return fetch(url, params)
      .then(response => {
        return response.json();
      })
      .then(result => {
        return result;
      })
      .catch(err => {
        return err.message;
      });
  }