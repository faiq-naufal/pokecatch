import PropTypes from "prop-types";
import { StyledPokeball } from "./styled";
import pokeballImg from "../../../assets/images/pokeball.svg";
import pokeballOpenImg from "../../../assets/images/pokeball-open.svg";

export default function Pokeball({ type, ...rest }) {
  return (
    <StyledPokeball {...rest}>
      <div className="pokeball__wrapper">
        <div className="pokeball__image">
          {type === "capture" ? (
            <img src={pokeballImg} alt="Catch Pokemon" />
          ) : type === "release" ? (
            <img src={pokeballOpenImg} alt="Release Pokemon" />
          ) : (
            <img src={pokeballImg} alt="Catch Pokemon" />
          )}
        </div>
        <span className="pokeball__label">
          {type === "capture"
            ? "Catch"
            : type === "release"
            ? "Release"
            : "Catch"}
        </span>
      </div>
    </StyledPokeball>
  );
}

Pokeball.propTypes = {
  type: PropTypes.string.isRequired,
};
