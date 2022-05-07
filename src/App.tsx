import { Home } from './pages/Home';

import { PokemonsProvider } from './hooks/usePokemons';

import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <PokemonsProvider>
      <GlobalStyle />

      <Home />
    </PokemonsProvider>
  );
}
