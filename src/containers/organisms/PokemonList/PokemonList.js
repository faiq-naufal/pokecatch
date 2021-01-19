//libraries
import Link from "next/link";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

//components
import PokemonCard from "../../../components/molecules/PokemonCard/PokemonCard";

//styled component with emotion
import {
  StyledPokemonList,
  StyledCardInfo,
  StyledMyPokemonCardFooter,
} from "./styled";

//hooks
import { useMyPokemon } from "../../../hooks/useMyPokemon";

//this component is used for displaying all list of pokemon whether it's at pokemon list page or my pokemon list page
export default function PokemonList({
  pokemons,
  getIndividualPokemonTotalCaptured = null,
}) {
  //next router initialization
  const router = useRouter();

  //check if this component is inside my pokemon list page or inside different page
  const isMyPokemonListPage = router.pathname === "/my-pokemon-list";

  return (
    <StyledPokemonList>
      {/* check if pokemons exist */}
      {pokemons &&
        pokemons.map((pokemon) => (
          <div key={uuidv4()}>
            {isMyPokemonListPage ? (
              <MyPokemonListCard
                pokemon={pokemon}
                isMyPokemonListPage={isMyPokemonListPage}
              />
            ) : (
              <HomePokemonListCard
                pokemon={pokemon}
                isMyPokemonListPage={isMyPokemonListPage}
                getIndividualPokemonTotalCaptured={
                  getIndividualPokemonTotalCaptured
                }
              />
            )}
          </div>
        ))}
    </StyledPokemonList>
  );
}

/**
 * @desc a function component that return my pokemon list card
 * @param pokemon pokemon object
 * @param isMyPokemonListPage boolean
 */
const MyPokemonListCard = ({ pokemon, isMyPokemonListPage }) => {
  const myPokemon = useMyPokemon();
  return (
    <>
      {/* display pokemon card */}
      <PokemonCard
        id={pokemon.id}
        name={pokemon.name}
        isMyPokemonListPage={isMyPokemonListPage}
        image={pokemon.sprites.front_default}
        altImg={pokemon.nickname}
      />
      <StyledMyPokemonCardFooter>
        <div className="card__footer-name">{pokemon.nickname}</div>
        {/* when button clicked will release pokemon from storage */}
        <button onClick={() => myPokemon.releasePokemon(pokemon)}>
          Release Pokemon
        </button>
      </StyledMyPokemonCardFooter>
    </>
  );
};

/**
 * @desc a function component that return home pokemon list card
 * @param pokemon pokemon object
 * @param getIndividualPokemonTotalCaptured function
 */
const HomePokemonListCard = ({
  pokemon,
  getIndividualPokemonTotalCaptured,
}) => {
  //return individual pokemon total captured Map which consists of total individual pokemon captured / owned
  let individualPokemonTotalCaptured = getIndividualPokemonTotalCaptured();
  return (
    <>
      <Link href={`/pokemon/${pokemon.name.toLowerCase()}`}>
        <a>
          {/* display pokemon card */}
          <PokemonCard
            id={pokemon.id}
            image={pokemon.image}
            altImg={pokemon.name}
          />
        </a>
      </Link>
      <StyledCardInfo>
        <div className="card__footer-name">{pokemon.name}</div>
        <div className="card__footer-captured">
          Captured:{" "}
          {individualPokemonTotalCaptured.has(pokemon.name)
            ? individualPokemonTotalCaptured.get(pokemon.name)
            : 0}
        </div>
      </StyledCardInfo>
    </>
  );
};

//type checking for PokemonList component
PokemonList.propTypes = {
  pokemon: PropTypes.array,
};

//type checking for MyPokemonListCard component
MyPokemonListCard.propTypes = {
  pokemon: PropTypes.oneOfType([PropTypes.array, PropTypes.any]),
  isMyPokemonListPage: PropTypes.bool,
};

//type checking for HomePokemonListCard component
HomePokemonListCard.propTypes = {
  pokemon: PropTypes.oneOfType([PropTypes.array, PropTypes.any]),
  isMyPokemonListPage: PropTypes.bool,
  getIndividualPokemonTotalCaptured: PropTypes.func,
};
