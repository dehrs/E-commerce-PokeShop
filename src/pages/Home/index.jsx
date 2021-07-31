import { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { InputSearch } from '../../components/Input-Search'

import { useListPokemon } from '../../hooks/useListPokemon';
import { useCart } from '../../hooks/useCart';

import { ProductList } from './styles';

const Home = () => {
  const [pokemonsFiltered, setPokemonsFiltered] = useState([]);
  const [inputFilter, setInputFilter] = useState('');

  const { pokemons } = useListPokemon();
  const { addProduct, cart } = useCart();

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    const newSumAmount = { ...sumAmount }
    newSumAmount[product.id] = product.amount

    return newSumAmount;
  }, {}, 0)


  useEffect(() => {
    setPokemonsFiltered(
      pokemons.filter(
        filtered =>
          filtered.name.toLowerCase().indexOf(inputFilter) !== -1,
      ),
    );

  }, [pokemons, inputFilter]);

  const handleSearchPokemon = value => {
    setInputFilter(value.toLowerCase());
  };

  function handleAddProduct(product) {
    addProduct(product)
  }

  return (
    <>
      <InputSearch
        handleSearchPokemon={e => handleSearchPokemon(e.target.value)}
      />
      <div className="grid-3_xs-1 grid-equalHeight" >
        {pokemonsFiltered.map(pokemon => (
          <ProductList className="col" key={pokemon.id}>
            <li>
              <Link to={`/product/${pokemon.id}`}>
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
                  alt={pokemon.name} />
              </Link>
              <strong>{pokemon.name}</strong>
              <span>{pokemon.priceFormatted}</span>
              <button
                type="button"
                onClick={() => handleAddProduct(pokemon)}
              >
                <div>
                  <MdAddShoppingCart size={16} color="#FFF" />
                  {cartItemsAmount[pokemon.id] || 0}
                </div>

                <span>ADICIONAR AO CARRINHO</span>
              </button>
            </li>
          </ProductList>
        ))}
      </div>
    </>
  );
};

export default Home;
