"use strict";
//CLASSE RESPONSÁVEL PELO TRATAMENTO E EXIBIÇÃO DA LISTA DE PROCESSOS
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ocorrencias = void 0;
class Ocorrencias {
    constructor(indiceProcessos, coordenadasProcessos) {
        const processosValidos = this.limparSemCoordenadas(coordenadasProcessos);
        const listaProcessos = this.criarArrayCompleto(indiceProcessos, processosValidos);
        this.lista = listaProcessos;
    }
    criarArrayCompleto(indiceProcessos, processosValidos) {
        const listaProcessos = processosValidos.map((p) => {
            const indice = indiceProcessos.find(i => i.processo_numero == p.processo_numero);
            const processo = {
                "id": p.processo_numero,
                "latitude": p.latitude,
                "longitude": p.longitude,
                "ocorrencia": indice.processo_ocorrencia
            };
            return processo;
        });
        return listaProcessos;
    }
    limparSemCoordenadas(coordenadasProcessos) {
        const processosComCoordenadasValidas = coordenadasProcessos.filter((processo) => {
            return processo.latitude && processo.longitude != null;
        });
        return processosComCoordenadasValidas;
    }
}
exports.Ocorrencias = Ocorrencias;
