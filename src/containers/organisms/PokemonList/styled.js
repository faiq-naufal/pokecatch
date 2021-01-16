import styled from "@emotion/styled";

export const StyledPokemonList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto, 240px));
  grid-gap: 1.25rem;
  justify-content: space-around;

  @media (min-width: 768px) {
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
