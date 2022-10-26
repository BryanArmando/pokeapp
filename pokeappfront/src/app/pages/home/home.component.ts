import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokeinterface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public page: number = 0;
  public search: string = '';


  pokemons: any= [];

  constructor( private pokemonService: PokemonService) { }

  ngOnInit(): void {

    this.pokemonService.obtenerPokemon()
      .subscribe( resp => {
        this.pokemons = resp;
        console.log(resp);
      });    

  }

  nextPage(){
    this.page +=10;
  }
  backPage(){
    if(this.page >0)
      this.page -=10;
  }

  onSearchPokemon(search: string){
    this.page = 0;
    this.search = search;
  }

}
