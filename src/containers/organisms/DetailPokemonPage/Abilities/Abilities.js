//libraries
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

//styled component with emotion
import { StyledAbilities } from "./styled";

//This is component for displaying pokemon abilities on detail pokemon page
export default function Abilities({ pokemon }) {
  return (
    <StyledAbilities>
      <strong>Abilities:</strong>
      <div className="abilities">
        {pokemon.abilities.map(({ ability }) => (
          <div key={uuidv4()} className="ability">
            {ability.name}
          </div>
        ))}
      </div>
    </StyledAbilities>
  );
}

//type checking
Abilities.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
