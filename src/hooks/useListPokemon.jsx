import { createContext, useContext, useState, useEffect } from 'react';

import axios from 'axios';

import { formatValue } from '../utils/formatValue';

const ListPokemonContext = createContext({});

export function ListPokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const listPokemon = []
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=9');

      for (let results of response.data.results) {

        const { data } = await axios.get(results.url);
        const { id, name } = data;

        const result = {
          id,
          name,
          price: Math.floor(Math.random() * 1000),
          stock: 10
        }

        result.priceFormatted = formatValue(result.price)

        listPokemon.push(result);

      }

      setPokemons(listPokemon);

    }

    loadProducts();
  }, []);


  return (
    <ListPokemonContext.Provider value={{ pokemons }}>
      {children}
    </ListPokemonContext.Provider>
  );
}

export function useListPokemon() {
  const context = useContext(ListPokemonContext);

  return context;
}
