import { Form } from '../../components/Form';
import { PokemonList } from '../../components/PokemonList';

import { Container, Content } from './styles';

export function Home() {
  return (
    <Container>
      <Content>
        <Form />
        <PokemonList />
      </Content>
    </Container>
  );
}
