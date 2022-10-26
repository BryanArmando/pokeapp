import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrls: ['./pokedetail.component.css']
})
export class PokedetailComponent implements OnInit {

  public id:any;

  constructor(private route:ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:any) => {
      const {params} = paramMap
      console.log(paramMap);
      this.pokemonService.pokemonporId(params.id).subscribe(resp =>{
        this.id = resp;
        console.log(resp)
      })
    })
  }

}
