"use strict";
const { Server } = require("./server.js");
const { mapMarkerController } = require('./map-marker/controller/controller.js');
//mapMarkers();
const server = new Server(8000);
server.subirApiGet("/", enviarMapMarkers("ocorrencias", 1000));
async function enviarMapMarkers(key, ttl) {
    if (!server.cachePresente(key)) {
        console.log("entrei");
        const lista = await getMapMarkers();
        server.inserirCache(key, lista, ttl);
    }
    console.log(server.pegarCache(key));
    return JSON.stringify(server.pegarCache(key));
}
async function getMapMarkers() {
    const ocorrencias = await mapMarkerController();
    return ocorrencias.lista;
}
