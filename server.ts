//MODELO DO SERVIDOR

import { Application } from "express";
import express = require("express");
import NodeCache = require("node-cache");

export class Server {
    server: Application;
    port: number;
    cache: NodeCache;
    defaultTTL: number;

    constructor(port:number){
        this.server = express();
        this.port = port;
        this.subirServer();
        this.cache = this.subirCache();
        this.defaultTTL = 3600; //TEMPO (EM SEGUNDOS) DEFAULT PARA EXPIRAR INFORMAÇÕES DO CACHE, ESTÁ COMO 1 HORA MAS PODE SER ALTERADO.
    }

    async subirApiGet(route:string, func:any, ttl?:number){
         this.server.get("/" + route, async (req, res) => {
            if(ttl === undefined){
                ttl = this.defaultTTL;            
            }
            const json = await func(route,ttl);
            console.log("Peguei JSON!");
            res.send(json);
          })
    }

    inserirCache(key:string, val:any, ttl:number){
        this.cache.set(key, val, ttl);
    }
    pegarCache(key:string){
        return this.cache.get(key);
    }

    cachePresente(key:string){
        return this.cache.has(key);
    }

    private subirCache(){
        return new NodeCache();
    }

    private subirServer() {
        this.server.listen(this.port, () => {
            console.log("Servidor iniciado com sucesso no port " + this.port);
            }).on("error", (err) => {
                console.log("Erro ao iniciar servidor! ", err);
            });
    }

}

