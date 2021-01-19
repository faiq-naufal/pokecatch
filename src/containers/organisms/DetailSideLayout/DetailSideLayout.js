import PropTypes from "prop-types";
import { StyledDetailSideLayout } from "./styled";
import PokemonCard from "../../../components/molecules/PokemonCard/PokemonCard";

export default function DetailSideLayout({ pokemon }) {
  return (
    <StyledDetailSideLayout>
      <h1>{pokemon.name}</h1>
      <PokemonCard
        id={pokemon.id}
        image={pokemon.sprites.front_default}
        altImg={pokemon.name}
      />
      <div className="detail__sidebar-height-weight">
        <div>Height: {pokemon.height}dm</div>
        <hr />
        <div>Weight: {pokemon.weight}hg</div>
      </div>
    </StyledDetailSideLayout>
  );
}

DetailSideLayout.propTypes = {
  pokemon: PropTypes.object,
};
