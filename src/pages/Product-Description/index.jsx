import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LinearProgress from '@material/react-linear-progress';
import { useListPokemon } from '../../hooks/useListPokemon';
import { useCart } from '../../hooks/useCart';

import { Container, Content, ContentImg, PokemonAbout, PokemonDescription, PokemonStats } from './styles';

const ProductDescription = () => {
  const { id } = useParams();
  const { pokemons } = useListPokemon();
  const { addProduct } = useCart();

  const [pokemonDescription, setPokemonDescription] = useState({});
  const [pokemonAbilities, setPokemonAbilities] = useState('');
  const [pokemonTypes, setPokemonTypes] = useState('');
  const [pokemonStats, setPokemonStats] = useState([]);

  useEffect(() => {
    const loadPage = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const pokemonExist = pokemons.find(pokemon => pokemon.id == id);

      const result = {
        ...response.data,
        ...pokemonExist
      }
      setPokemonDescription(result);

      let abilitiesArray = [];
      let typesArray = [];
      let statsArray = [];

      for (let abilities of response.data.abilities) {
        abilitiesArray.push(abilities.ability.name
        );
      };

      for (let types of response.data.types) {
        typesArray.push(types.type.name);
      };

      let nameStats = ['attack', 'defense', 'hp', 'speed']
      for (let stats of response.data.stats) {
        if (nameStats.includes(stats.stat.name)) {
          statsArray.push({
            baseState: stats.base_stat,
            baseStateConverted: stats.base_stat / 100,
            name: stats.stat.name
          });
        }
      };

      setPokemonAbilities(abilitiesArray.join(', '));
      setPokemonTypes(typesArray.join(', '));
      setPokemonStats(statsArray);
    }

    loadPage();
  }, [pokemons])

  function handleAddProduct() {
    addProduct(pokemonDescription)
  }

  return (
    <Container>
      <Content>
        <ContentImg>
          <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonDescription.id}.png`}
            alt={pokemonDescription.name} />
          <strong>{pokemonDescription.name}</strong>
          <span>{pokemonDescription.priceFormatted}</span>
        </ContentImg>

        <PokemonAbout>
          <PokemonDescription>
            <div>
              <p>
                <strong>Habilidades</strong>
              </p>
              <span>{pokemonAbilities}</span>
              <p>
                <strong>Tipo</strong>
              </p>
              <span>{pokemonTypes}</span>
            </div>

            <div>
              <p>
                <strong>Altura</strong>
              </p>
              <span>{pokemonDescription.height}m </span>
              <p>
                <strong>Peso</strong>
              </p>
              <span>{pokemonDescription.weight}kg</span>

            </div>
          </PokemonDescription>
          <PokemonStats>
            {pokemonStats.map(stat => (
              <div key={stat.name}>
                <p>
                  <strong>{stat.name}</strong>
                </p>

                <span>{stat.baseState}</span>
                <LinearProgress
                  bufferingDots={false}
                  buffer={1}
                  progress={stat.baseStateConverted}
                />

              </div>
            ))}
          </PokemonStats>
        </PokemonAbout>


      </Content>


      <footer>
        <button type="button"
          onClick={() => handleAddProduct()}
        >ADICIONAR AO CARRINHO
        </button>

      </footer>
    </Container>
  );
};

export default ProductDescription;
