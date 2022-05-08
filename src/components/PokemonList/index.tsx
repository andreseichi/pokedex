import { FormEvent, useEffect, useState } from 'react';

import { PokemonCard } from '../PokemonCard';

import { api } from '../../services/api';

import { usePokemons } from '../../hooks/usePokemons';

import {
  Container,
  Form,
  FormContainer,
  Input,
  Content,
  SearchIcon,
  ReloadIcon,
  StyledButton,
} from './styles';

import { PokemonInterface } from '../../types/pokemon';

interface PokemonListData {
  next: string | null;
  previous: string | null;
  results: PokemonInterface[];
}

export function PokemonList() {
  const [pokemonList, setPokemonList] = useState({} as PokemonListData);
  const [pokemons, setPokemons] = useState<PokemonInterface[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<PokemonInterface[]>(
    []
  );
  const [query, setQuery] = useState('');

  const { pokemonsList } = usePokemons();

  useEffect(() => getPokemons, []);

  function getPokemons() {
    api.get('/pokemon').then(({ data }) => {
      setPokemonList(data);
      setPokemons(data.results);
    });
  }

  useEffect(() => {
    const filteredPeople =
      query === ''
        ? pokemonsList
        : pokemonsList.filter((pokemon) => {
            return pokemon.name.toLowerCase().includes(query.toLowerCase());
          });

    setFilteredPokemons(filteredPeople);
  }, [query]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setPokemons(filteredPokemons);
  }

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
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Input onChange={(event) => setQuery(event.target.value)} />
          <StyledButton type="submit">
            <SearchIcon />
          </StyledButton>
        </Form>

        <StyledButton onClick={getPokemons}>
          <ReloadIcon />
        </StyledButton>
      </FormContainer>

      <Content>
        {pokemons?.map((pokemon) => (
          <PokemonCard
            name={pokemon.name}
            url={pokemon.url}
            key={pokemon.name}
          />
        ))}

        {/* {pokemonsList?.map((pokemon) => console.log(pokemon))} */}

        {pokemonList.next && query === '' ? (
          <button onClick={handleLoadMorePokemons}>
            Carregar mais pokemons
          </button>
        ) : (
          ''
        )}
      </Content>
    </Container>
  );
}
