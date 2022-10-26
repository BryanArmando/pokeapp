import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../models/pokeinterface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(pokemons: Pokemon[], page: number = 0, search: string = '') : Pokemon[] {

    if(search.length ===0)
      return pokemons.slice(page, page+10);

    const filteredPokemon = pokemons.filter(poke => poke.nombre?.includes(search));

    return filteredPokemon.slice(page, page + 10);

  }

}
