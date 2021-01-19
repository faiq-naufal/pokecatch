import Image from "next/image";
import PropTypes from "prop-types";
import { StyledPokemonImage } from "./styled";

export default function PokemonImage({ image, width, height, altImg }) {
  return (
    <StyledPokemonImage>
      <div className="circle">
        <Image src={image} width={width} height={height} alt={altImg} />
      </div>
    </StyledPokemonImage>
  );
}

PokemonImage.propTypes = {
  image: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired,
};
