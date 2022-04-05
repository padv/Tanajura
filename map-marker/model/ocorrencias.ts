import { Processo } from "./processo"

export class Ocorrencias {
    lista: Processo[];

    constructor(indiceProcessos:any[], coordenadasProcessos:any[]) {
        const processosValidos = this.limparSemCoordenadas(coordenadasProcessos);
        const listaProcessos = this.criarArrayCompleto(indiceProcessos, processosValidos);
        this.lista = listaProcessos;     
    }


    criarArrayCompleto(indiceProcessos:any[], processosValidos:any[]) {
        const listaProcessos = processosValidos.map((p) => {
            const indice = indiceProcessos.find(i => i.processo_numero == p.processo_numero);
            const processo:Processo = {
                "id": p.processo_numero,
                "latitude": p.latitude,
                "longitude": p.longitude,
                "ocorrencia": indice.processo_ocorrencia
            }
            return processo;
        });
        
        return listaProcessos;
    }

    limparSemCoordenadas(coordenadasProcessos:any[]) {

        const processosComCoordenadasValidas = coordenadasProcessos.filter((processo) => {
            return processo.latitude && processo.longitude != null;
        });
        
        return processosComCoordenadasValidas;
    }

}