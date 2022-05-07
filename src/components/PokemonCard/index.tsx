import { useEffect, useState } from 'react';

import { PokemonInterface } from '../../types/pokemon';
import { Type } from '../../types/type';

import {
  Container,
  Sprite,
  PokemonInfo,
  LoadingIcon,
  Title,
  TypeSpan,
} from './styles';

import Loading from '../../assets/image.gif';
import { api } from '../../services/api';

interface PokemonData {
  height: number;
  id: number;
  name: string;
  types: [
    {
      slot: number;
      type: Type;
    }
  ];
  weight: number;
}

export function PokemonCard({ name, url }: PokemonInterface) {
  const [isLoading, setIsLoading] = useState(true);
  const [types, setTypes] = useState<Type[]>([]);
  const [pokemonData, setPokemonData] = useState({} as PokemonData);

  useEffect(() => {
    const newUrl = url?.split('https://pokeapi.co/api/v2').join('');

    api.get(`${newUrl}`).then(({ data }) => {
      setPokemonData(data);
    });
  }, []);

  function handle() {
    console.log(pokemonData);
  }

  const pokemonIndex = url.split('/')[6];
  const pokemonIndexFormated = pokemonIndex.toString().padStart(3, '0');
  const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

  return (
    <Container onClick={handle}>
      {isLoading ? <LoadingIcon src={Loading} alt="" /> : null}

      <Sprite src={pokemonImageUrl} onLoad={() => setIsLoading(false)} />
      <PokemonInfo>
        <p className="id">Nº{pokemonIndexFormated}</p>
        <Title>{name}</Title>

        {pokemonData.types?.map(({ type }) => (
          <TypeSpan key={type.name} type={type.name}>
            {type.name}
          </TypeSpan>
        ))}
      </PokemonInfo>
    </Container>
  );
}
