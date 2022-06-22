"use strict";
//MODELO DO SERVIDOR
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express = require("express");
const NodeCache = require("node-cache");
class Server {
    constructor(port) {
        var cors = require('cors');
        this.server = express();
        this.server.use(cors());
        this.port = port;
        this.subirServer();
        this.cache = this.subirCache();
        this.defaultTTL = 3600; //TEMPO (EM SEGUNDOS) DEFAULT PARA EXPIRAR INFORMAÇÕES DO CACHE, ESTÁ COMO 1 HORA MAS PODE SER ALTERADO.
    }
    async subirApiGet(route, func, ttl) {
        this.server.get("/" + route, async (req, res) => {
            if (ttl === undefined) {
                ttl = this.defaultTTL;
            }
            const resp = await func(route, ttl);
            res.send(resp);
        });
    }
    inserirCache(key, val, ttl) {
        this.cache.set(key, val, ttl);
    }
    pegarCache(key) {
        return this.cache.get(key);
    }
    cachePresente(key) {
        return this.cache.has(key);
    }
    subirCache() {
        return new NodeCache();
    }
    subirServer() {
        this.server.listen(this.port, () => {
            console.log("Servidor iniciado com sucesso no port " + this.port);
        }).on("error", (err) => {
            console.log("Erro ao iniciar servidor! ", err);
        });
    }
}
exports.Server = Server;
