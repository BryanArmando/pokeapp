package com.pokeapp.pokemon.repository;

import com.pokeapp.pokemon.entity.Pokemon;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PokemonRepository extends JpaRepository<Pokemon, Long> {
}
