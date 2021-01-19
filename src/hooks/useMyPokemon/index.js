//libraries
import { useState, useEffect, useContext, createContext } from "react";

//initialize and create context
const PokemonContext = createContext([]);

//get provider from Pokemon Context
const { Provider } = PokemonContext;

//this is MyPokemonProvider, it will be used to encapsulate all the components so every components can access its value
export const MyPokemonProvider = ({ children }) => {
  //initialize useMyPokemonProvider
  const pokemon = useMyPokemonProvider();

  //put value returned from useMyPokemonProvider to context provider
  return <Provider value={pokemon}>{children}</Provider>;
};

/**
 * @desc function that contains all logic related managing captured pokemon state
 * @return object - object that contains method to be used in other component
 */
export const useMyPokemonProvider = () => {
  //initialize state for storing captured pokemons in state
  const [capturedPokemons, setCapturedPokemons] = useState([]);

  //initialize loading state for local storage. This will be used to check initial syncronization between local storage and  state in page load on the first time. To check if it's still loading or if it's already finished
  const [isLoadingLocalStorage, setIsLoadingLocalStorage] = useState(true);

  //this use effect is the initial use effect that runs on the first time page load. It will check if we can get data from local storage.
  useEffect(() => {
    if (isLoadingLocalStorage) {
      //first, let's try to get pokemons from local storage
      let myPokemons = localStorage.getItem("myPokemons");

      //if there are any captured pokemons in storage set captured pokemons state after page load with the captured pokemons in storage
      if (myPokemons) {
        setCapturedPokemons(JSON.parse(myPokemons));
      } else {
        //if there are not any captured pokemons in storage or localstorage return null we need to set initial array from captured pokemons state to prepare local storage for storing data
        localStorage.setItem("myPokemons", JSON.stringify(capturedPokemons));
      }

      //synchronize local storage with captured pokemon state is finished and loading set to false
      setIsLoadingLocalStorage(false);
    }
  }, []);

  /*
  This use effect runs every time state of captured pokemons change. Meaning if there's new pokemon captured or if there's pokemon that's released this function will be runs to make sure local storage keep updated and has same value with captured pokemons.
  If it runs on page load it will disturb initial use effect that runs for synchronization between local storage and state. So we need to make 
  sure it's not run on page load with checking for isLoadingLocalStorage is true or not.
  */
  useEffect(() => {
    if (!isLoadingLocalStorage) {
      //if loading has finished, every time captured pokemons state change, it will synchronize local storage with the new captured pokemons state
      localStorage.setItem("myPokemons", JSON.stringify(capturedPokemons));
    }
  }, [capturedPokemons]);

  /**
   * @desc this function is used to get all captured pokemons
   * @return array - array of pokemons
   */
  const getCapturedPokemons = () => capturedPokemons;

  /**
   * @desc this function is used to capture new pokemon and store it into
   * state before use effect will store it into local storage
   * @param pokemon - pokemon object
   */
  const capturePokemon = (pokemon) => {
    setCapturedPokemons((prevState) => [...prevState, pokemon]);
  };

  /**
   * @desc this function is used to release pokemon that has been captured
   * @param pokemon - pokemon object that's about to be released
   */
  const releasePokemon = (releasedPokemon) => {
    //page will ask for confirmation before releasing pokemon
    const confirmation = confirm(
      "Are you sure you want to release the pokemon?"
    );

    //if the answer is ok, then update captured pokemons state and remove the released pokemon from the captured pokemons state
    if (confirmation) {
      setCapturedPokemons((capturedPokemons) =>
        capturedPokemons.filter(
          (capturedPokemon) => capturedPokemon.uuid !== releasedPokemon.uuid
        )
      );
    }
    return;
  };

  //in the end this function will expose these methods to be used in other component
  return {
    getCapturedPokemons,
    capturePokemon,
    releasePokemon,
  };
};

//read context with its value and export it to another component
export const useMyPokemon = () => useContext(PokemonContext);
