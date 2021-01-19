//libraries
import styled from "@emotion/styled";

//styled component with emotion
export const StyledPokemonList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(auto, 240px));
  grid-gap: 1.25rem;
  justify-content: space-evenly;

  @media (min-width: 992px) {
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

//styled component with emotion
export const StyledCardInfo = styled.div`
  width: 100%;
  padding: 1rem 0;

  .card__footer-name {
    font-weight: 700;
    font-size: 2rem;
    text-transform: capitalize;
    margin-bottom: 0.5rem;
  }

  .card__footer-captured {
    font-weight: 400;
    font-size: 1.25rem;
    letter-spacing: 0.25px;

    @media (min-width: 768px) {
      font-size: 1.375rem;
    }
  }
`;

//styled component with emotion
export const StyledMyPokemonCardFooter = styled.div`
  text-align: center;
  padding: 1rem 0;

  .card__footer-name {
    font-weight: 700;
    font-size: 2rem;
    text-transform: capitalize;
    margin-bottom: 1rem;
  }

  button {
    display: inline-flex;
    font-size: 1.125rem;
    font-family: inherit;
    text-align: center;
    padding: 0.375rem 0.75rem;
    border-radius: 8px;
    border: solid 2px #000;
    background: #c11313;
    color: #fff;
    cursor: pointer;
    transition: all 200ms ease-in;

    &:hover {
      background: #820d0d;
    }
  }
`;
