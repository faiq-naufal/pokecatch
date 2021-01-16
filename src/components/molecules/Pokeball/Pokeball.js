import { StyledPokeball } from "./styled";
import pokeball from "../../../assets/images/pokeball.svg";
import pokeballOpen from "../../../assets/images/pokeball-open.svg";

export default function Pokeball() {
  return (
    <StyledPokeball>
      <div className="pokeball__wrapper">
        <img src={pokeball} alt="Catch Pokemon" />
      </div>
      <span className="pokeball__label">Catch</span>
    </StyledPokeball>
  );
}
