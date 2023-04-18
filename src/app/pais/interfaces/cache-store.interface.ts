import { Country } from "./pais.interface";
import { Region } from "./region.type";

export interface CacheStore {
    porPais: TermPais;
    porCapital: TermPais;
    porRegion: RegionPaises;
}

export interface TermPais {
    term: string;
    paises: Country[];
}

export interface RegionPaises {
    region?: Region;
    paises: Country[];
}