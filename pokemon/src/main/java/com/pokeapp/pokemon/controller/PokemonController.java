package com.pokeapp.pokemon.controller;

import com.pokeapp.pokemon.entity.Pokemon;
import com.pokeapp.pokemon.repository.PokemonRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET})
@Api(tags = "Información Pokemon")
public class PokemonController {

    @Autowired
    private PokemonRepository pokemonRepository;

    @ApiOperation(value = "POKEMON ID"
            ,notes = "Con este método obtiene informacion sobre un pokemon a traves del id")
    @GetMapping("/{id}")
    public ResponseEntity<Pokemon> obtenerPokemonsPonNombre(@PathVariable Long id){
        Optional<Pokemon> pokemonOptional = pokemonRepository.findById(id);
        if (!pokemonOptional.isPresent()){
            return ResponseEntity.unprocessableEntity().build();
        }
        return ResponseEntity.ok(pokemonOptional.get());
    }

    @ApiOperation(value = "POKEMON"
            ,notes = "Con este método obtienes todos los pokemones")
    @GetMapping("/pokemon")
    public List<Pokemon> obtenerpokemons(){
        return pokemonRepository.findAll();
    }


}
