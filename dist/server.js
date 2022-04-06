"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express = require("express");
const NodeCache = require("node-cache");
class Server {
    constructor(port) {
        this.server = express();
        this.port = port;
        this.subirServer();
        this.cache = this.subirCache();
    }
    async subirApiGet(route, func) {
        const json = await func;
        this.server.get(route, (req, res) => {
            res.send(json);
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
