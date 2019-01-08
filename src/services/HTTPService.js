/**
 * Service that provides HTTP methods to get remote data from 
 * an endpoint
 * 
 * @author Guillaume Nachury
 */

 import {SERVER} from "./../constants";

 /**
  * Method that place and async http call to the 'backend' do get some data from.
  * Data source is define as an argument here e.g.: 'company'
  * @param {*} dataType the data (json structure) you want to retrieve from the server
  */
 export const grabData = dataType=>new Promise((res,rej)=>{
    fetch(`${SERVER.url}${SERVER.port}${SERVER.api_base}/data/${dataType}`).then(
        resp=>{
            if(resp.status === 200) return resp.json();
            else rej();
        }
    )
    .then(
        data=>res(data)
    )
    .catch(()=>rej())
 })