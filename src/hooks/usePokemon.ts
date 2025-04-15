import { useState, useEffect } from 'react';
import { Pokemon, PokemonListResponse } from '../types/pokemon';

export const usePokemon = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data: PokemonListResponse = await response.json();

        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );

        setPokemons(pokemonDetails);
        setError(null);
      } catch (err) {
        setError('Failed to fetch Pokemon data');
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    pokemons: filteredPokemons,
    loading,
    error,
    searchTerm,
    setSearchTerm,
  };
};