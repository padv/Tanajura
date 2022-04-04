import { ocorrencia } from "./types"

export interface Processo {
    id: number
    latitude: string
    longitude: number
    ocorrencia: ocorrencia
}