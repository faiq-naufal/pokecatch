import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import PokemonCard from "../../../components/molecules/PokemonCard/PokemonCard";
import { StyledPokemonList } from "./styled";

export default function PokemonList({ pokemons }) {
  const router = useRouter();
  // const isMyPokemonListPage = router.pathname === '/my-pokemon-list';

  return (
    <StyledPokemonList>
      {pokemons &&
        pokemons.map((pokemon) => (
          <div key={pokemon.id}>
            <Link href={`/pokemon/${pokemon.name.toLowerCase()}`}>
              <a>
                <PokemonCard pokemon={pokemon} />
              </a>
            </Link>
          </div>
        ))}
    </StyledPokemonList>
  );
}

PokemonList.propTypes = {
  pokemon: PropTypes.array,
};
