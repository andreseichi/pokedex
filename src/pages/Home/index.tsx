import { useEffect, useState } from 'react';
import { Pokemon } from '../../components/Pokemon';
import { api } from '../../services/api';

import { PokemonInterface } from '../../types/pokemon';

import { Container, Content } from './styles';

interface PokemonList {
  next: string | null;
  previous: string | null;
  results: PokemonInterface[];
}

export function Home() {
  const [pokemonList, setPokemonList] = useState({} as PokemonList);
  const [pokemons, setPokemons] = useState<PokemonInterface[]>([]);

  useEffect(() => {
    api.get('/pokemon').then(({ data }) => {
      console.log(data);
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
      <Content>
        {pokemons.map((pokemon) => (
          <Pokemon name={pokemon.name} url={pokemon.url} key={pokemon.name} />
        ))}

        {pokemonList.next ? (
          <button onClick={handleLoadMorePokemons}>
            Carregar mais pokemons
          </button>
        ) : (
          <p>Não tem mais pokemons!</p>
        )}
      </Content>
    </Container>
  );
}
