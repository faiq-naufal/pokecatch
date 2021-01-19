import Link from "next/link";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import PokemonCard from "../../../components/molecules/PokemonCard/PokemonCard";
import {
  StyledPokemonList,
  StyledCardInfo,
  StyledMyPokemonCardFooter,
} from "./styled";
import { useMyPokemon } from "../../../hooks/useMyPokemon";

export default function PokemonList({
  pokemons,
  getIndividualPokemonTotalCaptured = null,
}) {
  const router = useRouter();
  const isMyPokemonListPage = router.pathname === "/my-pokemon-list";

  return (
    <StyledPokemonList>
      {pokemons &&
        pokemons.map((pokemon) => (
          <div key={uuidv4()}>
            {isMyPokemonListPage ? (
              <MyPokemonListPageCard
                pokemon={pokemon}
                isMyPokemonListPage={isMyPokemonListPage}
              />
            ) : (
              <HomePokemonListPage
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

const MyPokemonListPageCard = ({ pokemon, isMyPokemonListPage }) => {
  const myPokemon = useMyPokemon();
  return (
    <>
      <Link href={`/pokemon/${pokemon.name.toLowerCase()}`}>
        <a>
          <PokemonCard
            id={pokemon.id}
            nickname={pokemon.nickname}
            isMyPokemonListPage={isMyPokemonListPage}
            image={pokemon.sprites.front_default}
            altImg={pokemon.name}
          />
        </a>
      </Link>
      <StyledMyPokemonCardFooter>
        <button onClick={() => myPokemon.releasePokemon(pokemon)}>
          Release Pokemon
        </button>
      </StyledMyPokemonCardFooter>
    </>
  );
};

const HomePokemonListPage = ({
  pokemon,
  getIndividualPokemonTotalCaptured,
}) => {
  let individualPokemonTotalCaptured = getIndividualPokemonTotalCaptured();
  return (
    <>
      <Link href={`/pokemon/${pokemon.name.toLowerCase()}`}>
        <a>
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

PokemonList.propTypes = {
  pokemon: PropTypes.array,
};

MyPokemonListPageCard.propTypes = {
  pokemon: PropTypes.oneOfType([PropTypes.array, PropTypes.any]),
  isMyPokemonListPage: PropTypes.bool,
};

HomePokemonListPage.propTypes = {
  pokemon: PropTypes.oneOfType([PropTypes.array, PropTypes.any]),
  isMyPokemonListPage: PropTypes.bool,
  getIndividualPokemonTotalCaptured: PropTypes.func,
};
