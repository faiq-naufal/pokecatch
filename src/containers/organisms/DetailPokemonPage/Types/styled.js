//libraries
import styled from "@emotion/styled";

//styled component with emotion
export const StyledTypes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1.25rem;
  border-bottom: solid 4px #171923;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }

  strong {
    display: block;
    font-size: 1.5rem;
    font-weight: 600;
    margin-right: 0.5rem;

    @media (min-width: 768px) {
      font-size: 1.75rem;
    }
  }

  .types {
    display: flex;
  }

  .type {
    text-transform: capitalize;
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
    background: #c11313;
    border: solid 2px #171923;
    color: #fff;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  .type:not(:first-of-type) {
    margin-left: 0.75rem;
  }
`;
