import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoCard, Pokemon } from '../models/pokeinterface';
import urlBack from './direccionamiento';

import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient:HttpClient) { }

  obtenerPokemon(): Observable<Pokemon>{
    return this.httpClient.get<Pokemon>(`${urlBack}/pokemon`);
  }

  pokemonporId(id:string):Observable<Pokemon>{
    return this.httpClient.get<Pokemon>(`${urlBack}/${id}`)
  }



}
