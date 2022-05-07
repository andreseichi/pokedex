import { useEffect, useState } from 'react';

import { api } from '../../services/api';

import { PokemonCard } from '../PokemonCard';

import { Container } from './styles';

import { PokemonInterface } from '../../types/pokemon';
import { usePokemons } from '../../hooks/usePokemons';

interface PokemonListData {
  next: string | null;
  previous: string | null;
  results: PokemonInterface[];
}

export function PokemonList() {
  const [pokemonList, setPokemonList] = useState({} as PokemonListData);
  const [pokemons, setPokemons] = useState<PokemonInterface[]>([]);

  useEffect(() => {
    api.get('/pokemon').then(({ data }) => {
      setPokemonList(data);
      setPokemons(data.results);
    });
  }, []);

  function handleLoadMorePokemons() {
    const url = pokemonList.next;
    const newUrl = url?.split('https://pokeapi.co/api/v2').join('');

    api.get(`${newUrl}`).then(({ data }) => {
      setPokemonList(data);

      const newPokemons = [...pokemons];
      newPokemons.push(...data.results);
      setPokemons(newPokemons);
    });
  }

  return (
    <Container>
      <>
        {pokemons?.map((pokemon) => (
          <PokemonCard
            name={pokemon.name}
            url={pokemon.url}
            key={pokemon.name}
          />
        ))}

        {/* {pokemonsList?.map((pokemon) => console.log(pokemon))} */}

        {pokemonList.next ? (
          <button onClick={handleLoadMorePokemons}>
            Carregar mais pokemons
          </button>
        ) : (
          ''
        )}
      </>
    </Container>
  );
}
