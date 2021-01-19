import PropTypes from "prop-types";

//assets
import pokeballImg from "../../../assets/images/pokeball.svg";

//styled component with emotion
import { StyledPokeball } from "./styled";

//this is a component for floating pokeball capture in detail pokemon page
export default function Pokeball({ ...rest }) {
  return (
    <StyledPokeball {...rest}>
      <div className="pokeball__wrapper">
        <div className="pokeball__image">
          <img src={pokeballImg} alt="Catch Pokemon" />
        </div>
        <span className="pokeball__label">Catch</span>
      </div>
    </StyledPokeball>
  );
}

Pokeball.propTypes = {
  rest: PropTypes.any,
};
