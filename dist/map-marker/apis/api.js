"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const axios = require('axios');
function api(url, body) {
    return axios
        .post(url, body)
        .then((res) => {
        console.log(`statusCode: ${res.status}`);
        return res.data.result.records;
    })
        .catch((error) => {
        console.error(error);
    });
}
exports.api = api;
