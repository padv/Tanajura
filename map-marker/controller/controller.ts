import type { ApiBody } from "../model/apiBody";

const {Ocorrencias} = require("../model/ocorrencias.js");

const {api} = require('../apis/api.js')
//FUNÇÃO DISPARADA AO BATER NA ROTA DE PEGAR LOCALIZAÇÕES (REQUISIÇÃO DO FRONTEND) 
    //BUSCAR INFORMAÇÃO NA CACHE, SE NÃO TIVER:


export async function mapMarkerController() {

    const url = "http://dados.recife.pe.gov.br/api/3/action/datastore_search"

    const firstApiBody:ApiBody = {    
        "resource_id": "7a22d871-250e-419a-9b5a-1cab19db7be5",
        "filters": {
            "processo_ocorrencia": ["Deslizamentos de Barreiras","Alagamentos"]
            },
        "fields": ["processo_numero","processo_ocorrencia"],
        "limit": 100
    }

    const indiceProcessos = await api(url, firstApiBody);

    const numeroDosProcessos = indiceProcessos.map((p: { processo_numero: any; }) => p.processo_numero);

    const secondApiBody:ApiBody = {    
        "resource_id": "5eaed1e8-aa7f-48d7-9512-638f80874870",
        "filters": {
            "processo_numero": numeroDosProcessos
            },
        "fields": ["processo_numero","latitude","longitude"],
        "limit": 100
    }

    const coordenadasProcessos = await api(url, secondApiBody);

    //console.log(indiceProcessos);
    //console.log(coordenadasProcessos);

    const ocorrencias = new Ocorrencias(indiceProcessos, coordenadasProcessos);

    return ocorrencias;

    //console.log(localizacao);

}



        //CHAMAR FUNÇÃO DA API PARA PEGAR OS INCIDENTES(FUNÇÃO QUE DEVE ESTAR NA PASTA API)
        //CHAMAR SEGUNDA API
        //FILTRAR DADOS PARA MONTAR OBJETO
        //SALVAR NA CACHE
        //RETORNAR OBJETO PARA O FRONTEND