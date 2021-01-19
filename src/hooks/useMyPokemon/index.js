import { useState, useEffect, useContext, createContext } from "react";

const PokemonContext = createContext([]);
const { Provider } = PokemonContext;

export const MyPokemonProvider = ({ children }) => {
  const pokemon = useMyPokemonProvider();
  return <Provider value={pokemon}>{children}</Provider>;
};

export const useMyPokemonProvider = () => {
  const [capturedPokemons, setCapturedPokemons] = useState([]);
  const [isLoadingLocalStorage, setIsLoadingLocalStorage] = useState(true);

  useEffect(() => {
    if (isLoadingLocalStorage) {
      let myPokemons = localStorage.getItem("myPokemons");
      if (myPokemons) {
        setCapturedPokemons(JSON.parse(myPokemons));
      } else {
        localStorage.setItem("myPokemons", JSON.stringify(capturedPokemons));
      }

      setIsLoadingLocalStorage(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoadingLocalStorage) {
      localStorage.setItem("myPokemons", JSON.stringify(capturedPokemons));
    }
  }, [capturedPokemons]);

  const getCapturedPokemons = () => capturedPokemons;

  const capturePokemon = (pokemon) => {
    setCapturedPokemons((prevState) => [...prevState, pokemon]);
  };

  const releasePokemon = (releasedPokemon) => {
    const confirmation = confirm(
      "Are you sure you want to release the pokemon?"
    );

    if (confirmation) {
      setCapturedPokemons((capturedPokemons) =>
        capturedPokemons.filter(
          (capturedPokemon) => capturedPokemon.uuid !== releasedPokemon.uuid
        )
      );
    }
    return;
  };

  return {
    getCapturedPokemons,
    capturePokemon,
    releasePokemon,
  };
};

export const useMyPokemon = () => useContext(PokemonContext);
