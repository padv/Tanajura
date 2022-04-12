const axios = require('axios');

axios.post("http://old.apac.pe.gov.br/_lib/pluviometria.request.php", {
  "headers": {
    "accept": "*/*",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/x-www-form-urlencoded",
    "x-requested-with": "XMLHttpRequest"
  },
  "body": "acao=exibePluviometrosRMRSite&local=-1&order=DESC",
}).then((res) => console.log(res));