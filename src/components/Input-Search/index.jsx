import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

export const InputSearch = ({ handleSearchPokemon }) => {

  return (
    <Container >
      <FiSearch size={18} color="#787878" />
      <input
        type="text"
        placeholder="Procure pelo seu pokemon"
        onChange={handleSearchPokemon}
      />
    </Container>
  );
};
