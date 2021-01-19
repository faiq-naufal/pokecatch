//libraries
import styled from "@emotion/styled";

//styled component with emotion
export const StyledMoves = styled.div`
  border: solid 4px #171923;
  padding: 0.75rem 1rem;
  position: relative;

  strong {
    display: block;
    font-size: 1.5rem;
    font-weight: 600;

    @media (min-width: 768px) {
      font-size: 1.75rem;
    }
  }

  .moves {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }

  .move {
    margin-top: 1rem;
    margin-right: 0.5rem;
    font-size: 1.25rem;
    padding: 0.25rem 0.5rem 0.25rem 2.75rem;
    border-radius: 12px;
    border: solid 3px #171923;
    background: #c11313;
    color: #fff;
    text-transform: capitalize;
    position: relative;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }

    span {
      position: absolute;
      left: 5px;
      bottom: 0;
    }

    &::before {
      content: "";
      position: absolute;
      top: -2px;
      left: -2px;
      width: 36px;
      height: calc(100% + 4px);
      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;
      background-color: #171923;
    }
  }
`;
