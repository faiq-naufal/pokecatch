import styled from "@emotion/styled";

export const StyledPokeball = styled.div`
  position: fixed;
  bottom: 80px;
  left: 50%;
  max-width: 56px;
  cursor: pointer;
  z-index: 100;
  animation: moveUp 2s infinite alternate;

  @keyframes moveUp {
    0% {
      transform: translateX(-50%) translateY(0);
    }
    100% {
      transform: translateX(-50%) translateY(12px);
    }
  }

  @media (min-width: 768px) {
    bottom: 40px;
    max-width: 72px;
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

  .pokeball__wrapper {
    img {
      width: 100%;
      height: auto;
    }
  }
`;
