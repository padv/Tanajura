//FUNÇÃO PARA TESTAR APIS, RODAR: "node apitest.js" PARA REALIZAR TESTE


const axios = require('axios');

const url = "http://localhost:8000/ocorrencias" //ALTERAR A URL SE DESEJA TESTAR OUTRA API

apiTest(url);

function apiTest (url) {
 axios.get(url).then(res => (console.log(res.data)))
}