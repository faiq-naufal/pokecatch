//libraries
import PropTypes from "prop-types";

//components
import PokemonCard from "../../../../components/molecules/PokemonCard/PokemonCard";

//styled component with emotion
import { StyledDetailSideLayout } from "./styled";

//this is component for side layout (sidebar) at detail pokemon page, this component displays some info about pokemon such as name, id, image, height, and weight
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

//type checking
DetailSideLayout.propTypes = {
  pokemon: PropTypes.object,
};
