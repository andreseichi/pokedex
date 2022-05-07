import { useState } from 'react';

import { PokemonInterface } from '../../types/pokemon';

import { Container, Content, Sprite, LoadingIcon, Title } from './styles';

import Loading from '../../assets/image.gif';

export function Pokemon({ name, url }: PokemonInterface) {
  const [isLoading, setIsLoading] = useState(true);

  const pokemonIndex = url.split('/')[6];
  const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

  return (
    <Container>
      <Content>
        <Title>{name}</Title>
        {isLoading ? <LoadingIcon src={Loading} alt="" /> : null}

        <Sprite src={pokemonImageUrl} onLoad={() => setIsLoading(false)} />
      </Content>
    </Container>
  );
}
