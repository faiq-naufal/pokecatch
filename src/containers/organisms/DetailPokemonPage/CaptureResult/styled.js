//libraries
import styled from "@emotion/styled";

//styled component with emotion
export const StyledCaptureResult = styled.div`
  text-align: center;

  .result__body {
    margin: 0 auto;

    max-width: 600px;
  }

  .result__heading {
    span {
      text-transform: capitalize;
    }
  }

  .result__image {
    width: 75%;
    max-width: 260px;
    margin: 0 auto;
    margin-top: -2rem;

    @media (min-width: 768px) {
      max-width: 300px;
      margin-top: -1.5rem;
    }
  }

  .result__image.pokemon {
    max-width: 240px;
    margin: 0 auto;
  }

  .result__wrapper-input {
    margin: 2.5rem 0;
    font-size: 1.25rem;

    p:not(:last-of-type) {
      margin-bottom: 1.25rem;
    }

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  .result__input {
    margin-top: 2rem;
    width: 100%;
    padding: 6px 16px;
    border: solid 2px #000;
    font-size: 1.5rem;
    text-align: center;
    font-family: inherit;
    letter-spacing: 0.25px;

    @media (min-width: 768px) {
      padding: 10px 20px;
      font-size: 1.75rem;
    }
  }

  .result__input-error {
    color: #c11313;
    text-align: left;
    margin-top: 0.25rem;
    font-size: 1.125rem;

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  }

  .result__footer {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
      margin: 2rem 0 0 0;
    }

    @media (min-width: 480px) {
      margin-left: 50px;
      margin-right: 50px;
    }

    @media (min-width: 768px) {
      flex-direction: row;

      a {
        order: 1;
        margin: 0;
      }

      button {
        order: 2;
        margin: 0 0 0 2rem;
      }
    }

    > * {
      width: 100%;
      flex: 1;
    }
  }
`;
