import Image from "next/image";
import PropTypes from "prop-types";
import { StyledPokemonImage } from "./styled";

export default function PokemonImage({ image, width, height }) {
  return (
    <StyledPokemonImage>
      <div className="circle">
        <Image src={image} width={width} height={height} />
      </div>
    </StyledPokemonImage>
  );
}

PokemonImage.propTypes = {
  image: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};
