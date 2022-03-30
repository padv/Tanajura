const axios = require('axios');

const apiBody = {
    "resource_id": "7a22d871-250e-419a-9b5a-1cab19db7be5",
    "filters": {
      "processo_ocorrencia": ["Deslizamentos de Barreiras","Alagamentos"]
    },
    "limit": 10000
  };
axios
  .post('http://dados.recife.pe.gov.br/api/3/action/datastore_search', apiBody)
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res.data.result);
  })
  .catch(error => {
    console.error(error);
  });

