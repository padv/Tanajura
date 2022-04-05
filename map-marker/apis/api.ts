import { ApiBody } from "../model/apiBody";

const axios = require('axios');

export function api (url:string, body:ApiBody) {
 return axios
    .post(url, body)
      .then((res: { status: any; data: { result: { records: any; }; }; }) => {
        console.log(`statusCode: ${res.status}`);
        return res.data.result.records;
      })
      .catch((error: any) => {
        console.error(error);
      });

}






