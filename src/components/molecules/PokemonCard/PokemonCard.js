//libraries
import PropTypes from "prop-types";

//assets
import { StyledPokemonCard } from "./styled";

//components
import PokemonImage from "../../atoms/Image/PokemonImage/PokemonImage";

//this is component for displaying pokemon card which will be used in some areas on the website such as pokemon list page, pokemon detail page, and my pokemon list page
export default function PokemonCard({
  id,
  image,
  altImg,
  isMyPokemonListPage = false,
  name = null,
}) {
  return (
    <StyledPokemonCard>
      <div className="card__body">
        <PokemonImage
          image={image}
          width="160px"
          height="160px"
          altImg={altImg}
        />
        <span className="card__body-id">
          {/* check if this card is inside my pokemon list page. If it is, display nickname, if not display pokemon id */}
          {isMyPokemonListPage ? (
            <div>{name}</div>
          ) : (
            <div>
              {`#${id.toLocaleString("en-ID", {
                minimumIntegerDigits: 3,
                useGrouping: false,
              })}`}
            </div>
          )}
        </span>
      </div>
    </StyledPokemonCard>
  );
}

//type checking
PokemonImage.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired,
  isMyPokemonListPage: PropTypes.bool,
  nickname: PropTypes.string,
};
