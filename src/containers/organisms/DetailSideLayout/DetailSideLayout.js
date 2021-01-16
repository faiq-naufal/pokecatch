import PropTypes from "prop-types";
import { StyledDetailSideLayout, CardDetail } from "./styled";
import PokemonImage from "../../../components/atoms/PokemonImage/PokemonImage";

export default function DetailSideLayout({ pokemon }) {
  return (
    <StyledDetailSideLayout>
      <h1>{pokemon.name}</h1>
      <CardDetail>
        <PokemonImage
          image={pokemon.sprites.front_default}
          width="160px"
          height="160px"
        />
        <span className="card__id">{`#${pokemon.id.toLocaleString("en-ID", {
          minimumIntegerDigits: 3,
          useGrouping: false,
        })}`}</span>
      </CardDetail>
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
