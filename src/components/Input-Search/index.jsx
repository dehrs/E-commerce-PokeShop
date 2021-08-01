import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

export const InputSearch = ({ handleSearchPokemon }) => {

  return (
    <Container >
      <FiSearch size={18} color="#787878" />
      <input
        type="text"
        placeholder="Procure pelo nome do pokemon ou id"
        onChange={handleSearchPokemon}
      />
    </Container>
  );
};
