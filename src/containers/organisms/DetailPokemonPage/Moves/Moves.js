//libraries
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

//styled component with emotion
import { StyledMoves } from "./styled";

//assets
import lightningImg from "../../../../assets/images/lightning.svg";

//this is component for displaying pokemon moves on detail pokemon page
export default function Moves({ pokemon }) {
  return (
    <StyledMoves>
      <strong>Moves:</strong>
      <div className="moves">
        {pokemon.moves.map(({ move }) => (
          <div key={uuidv4()} className="move">
            <span>
              <img width="22px" height="22px" src={lightningImg} alt="Moves" />
            </span>
            {move.name}
          </div>
        ))}
      </div>
    </StyledMoves>
  );
}

//type checking
Moves.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
