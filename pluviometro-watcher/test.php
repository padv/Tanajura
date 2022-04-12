fetch("http://old.apac.pe.gov.br/_lib/pluviometria.request.php", {
  "headers": {
    "accept": "*/*",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    "pragma": "no-cache",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "http://old.apac.pe.gov.br/meteorologia/chuvas-rmr.php",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "acao=exibePluviometrosRMRSite&local=-1&order=DESC",
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
});

