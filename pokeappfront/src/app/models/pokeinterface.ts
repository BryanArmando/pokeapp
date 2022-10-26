import { tipopoke } from "./tipopoke";

export interface Pokemon{
    id?: number;
    nombre?: string;
    descripcion?: string;
    peso?: number;
    altura?: number;
    urlImagen?: string;
    tipo?: tipopoke[];
    habilidades?: string;
}


export interface InfoCard{
    id: number;
    name: string;
    habilidad: string;
}