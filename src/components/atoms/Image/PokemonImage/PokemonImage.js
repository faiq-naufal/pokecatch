//libraries
import Image from "next/image";
import PropTypes from "prop-types";

//styled component with emotion
import { StyledPokemonImage } from "./styled";

//this is component for displaying pokemon image inside circle
export default function PokemonImage({ image, width, height, altImg }) {
  return (
    <StyledPokemonImage>
      <div className="circle">
        <Image src={image} width={width} height={height} alt={altImg} />
      </div>
    </StyledPokemonImage>
  );
}

//type checking
PokemonImage.propTypes = {
  image: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired,
};
