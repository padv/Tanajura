import { ApiBody } from "../model/apiBody.js";

const axios = require('axios');

export function api (url:string, body:ApiBody) {
 return axios
    .post(url, body)
      .then(res => {
        console.log(`statusCode: ${res.status}`);
        return res.data.result.records;
      })
      .catch(error => {
        console.error(error);
      });

}






