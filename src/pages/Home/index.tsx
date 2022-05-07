import { PokemonList } from '../../components/PokemonList';

import { Container, Content } from './styles';

export function Home() {
  return (
    <Container>
      <Content>
        <PokemonList />
      </Content>
    </Container>
  );
}
