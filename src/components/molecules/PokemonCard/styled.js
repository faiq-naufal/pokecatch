import styled from "@emotion/styled";

export const StyledPokemonCard = styled.div`
  .card__body {
    width: 100%;
    padding: 1.25rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #e2e0da;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    }

    .card__body-id {
      margin-top: 1.25rem;
      background: #fff;
      border-radius: 20px;
      padding: 0.25rem 0.75rem;
      text-align: center;
      font-size: 1.25rem;
      letter-spacing: 0.25px;
      border: none;
    }
  }

  .card__footer {
    width: 100%;
    padding: 1rem 0;
  }

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
  }
`;
