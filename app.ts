//ARQUIVO DE ENTRADA DO BACKEND

const { Server } = require("./server.js");

const { mapMarkerController } = require('./map-marker/controller/controller.js');

const server = new Server(8000); //SOBE O SERVIDOR EM http://localhost:8000/

server.subirApiGet("ocorrencias",enviarMapMarkers); //SOBE A API DOS MARCADORES DO MAPA EM: http://localhost:8000/ocorrencias
server.subirApiGet("pluviometro",cronTeste);


function cronTeste(){
    console.log("Cron Funcionou!");
    return "Pegou!";
}
async function enviarMapMarkers(key:string, ttl:number) : Promise<{}> { //FUNÇÃO QUE RETORNA JSON COM OCORRÊNCIAS. KEY == ROTA DA API. TTL == TEMPO QUE INFORMAÇÃO VAI FICAR GUARDADA NO CACHE (SE NÃO FOR PASSADO NENHUM VALOR, IRÁ USAR O defaultTTL, da classe Server)
    if(!server.cachePresente(key)) {    //CHECA CACHE DO SERVIDOR SE INFORMAÇÃO JÁ EXISTE, SE NÃO, PEDE QUE O CONTROLLER RESPONSÁVEL PELAS OCORRÊNCIAS..
        console.log("Sem informação no cache! Fazendo requisição..."); 
        const lista = await getMapMarkers(); //..FAÇA A CHAMADA DA API EXTERNA, TRATE OS DADOS E RETORNE LISTA DE OCORRÊNCIAS..
        server.inserirCache(key, lista, ttl);  //..SALVA NOVA LISTA NO CACHE QUE VAI SE MANTER PELO VALOR PASSADO NO TTL.
    }
    console.log("Entreguei JSON!");
    return server.pegarCache(key);    

}


async function getMapMarkers() : Promise<{}> {//FUNÇÃO AUXILIAR PARA CHAMAR CONTROLLER RESPONSÁVEL PELA LISTA DE OCORRÊNCIAS
    const ocorrencias = await mapMarkerController();
    return ocorrencias.lista;
}

