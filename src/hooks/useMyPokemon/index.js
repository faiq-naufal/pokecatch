import { useState, useContext, createContext } from "react";

const PokemonContext = createContext([]);
const { Provider } = PokemonContext;

export const PokemonProvider = ({ children }) => {
  const pokemon = usePokemonProvider();
  return <Provider value={pokemon}>{children}</Provider>;
};

export const usePokemonProvider = () => {
  const [capturedPokemons, setCapturedPokemons] = useState([]);

  // const getPokemons = () => {
  //   let { loading, error, data } = useQuery(GET_POKEMONS, {
  //     variables: {
  //       limit: getPokemonOptions.limit,
  //       offset: getPokemonOptions.offset,
  //     },
  //   });

  //   if (data) {
  //     setPokemonsData(data);
  //   }

  //   return {
  //     loading,
  //     error,
  //     pokemonsData,
  //   };
  // };

  const getCapturedPokemons = () => {};

  const capturePokemon = (pokemon) => {
    setCapturedPokemons((prevState) => [...prevState, pokemon]);
  };

  const releasePokemon = (releasedPokemon) => {
    setCapturedPokemons((capturedPokemons) => {
      let result = capturedPokemons.filter(
        (pokemon) => pokemon !== releasedPokemon
      );
      return result;
    });
  };

  return {
    getCapturedPokemons,
    capturePokemon,
    releasePokemon,
  };
};

export const usePokemon = () => useContext(PokemonContext);
