import PropTypes from "prop-types";
import PokemonImage from "../../atoms/Image/PokemonImage/PokemonImage";
import { StyledPokemonCard } from "./styled";

export default function PokemonCard({
  id,
  image,
  altImg,
  isMyPokemonListPage = false,
  nickname = null,
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
          {isMyPokemonListPage ? (
            <div>{nickname}</div>
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

PokemonImage.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired,
  nickname: PropTypes.string,
  isMyPokemonListPage: PropTypes.bool,
};
