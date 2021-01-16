import PropTypes from "prop-types";
import PokemonImage from "../../atoms/PokemonImage/PokemonImage";
import { StyledPokemonCard } from "./styled";

export default function PokemonCard({ pokemon }) {
  return (
    <StyledPokemonCard>
      <div className="card__body">
        <PokemonImage image={pokemon.image} width="160px" height="160px" />
        <span className="card__body-id">{`#${pokemon.id.toLocaleString(
          "en-ID",
          { minimumIntegerDigits: 3, useGrouping: false }
        )}`}</span>
      </div>
      <div className="card__footer">
        <div className="card__footer-name">{pokemon.name}</div>
        <div className="card__footer-captured">Captured: 0</div>
      </div>
    </StyledPokemonCard>
  );
}

PokemonImage.propTypes = {
  pokemon: PropTypes.object,
};
