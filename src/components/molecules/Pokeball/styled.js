//libraries
import styled from "@emotion/styled";

//styled component with emotion
export const StyledPokeball = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 88px;
  right: 8%;
  max-width: 56px;
  cursor: pointer;
  z-index: 100;
  animation: moveUp 2s infinite alternate;

  @media (min-width: 1024px) {
    right: 6%;
  }

  //pokeball animation top to down and back to top again
  @keyframes moveUp {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(12px);
    }
  }

  @media (min-width: 768px) {
    bottom: 40px;
    max-width: 72px;
  }

  .pokeball__wrapper {
    filter: grayscale(1);
    transition: all 200ms ease-out;

    &:hover {
      transform: scale(1.1);
      filter: grayscale(0);
    }
  }

  .pokeball__label {
    display: block;
    margin-top: 2px;
    font-size: 1rem;
    text-align: center;
    font-weight: 600;
    padding: 0.25rem 0.5rem;
    background: #fff;
    text-transform: uppercase;
    border-radius: 8px;
    border: solid 1px #171923;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  .pokeball__image {
    img {
      width: 100%;
      height: auto;
    }
  }
`;
