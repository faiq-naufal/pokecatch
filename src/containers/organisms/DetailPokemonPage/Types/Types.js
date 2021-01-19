//libraries
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

//styled component with emotion
import { StyledTypes } from "./styled";

//This is component for displaying pokemon types on detail pokemon page
export default function Types({ pokemon }) {
  return (
    <StyledTypes>
      <strong>Types:</strong>
      <div className="types">
        {pokemon.types.map(({ type }) => (
          <div key={uuidv4()} className="type">
            {type.name}
          </div>
        ))}
      </div>
    </StyledTypes>
  );
}

//type checking
Types.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
