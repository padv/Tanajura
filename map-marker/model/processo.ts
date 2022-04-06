import type { ocorrencia } from "./types"

export interface Processo {
    id: number
    latitude: number
    longitude: number
    ocorrencia: ocorrencia
}