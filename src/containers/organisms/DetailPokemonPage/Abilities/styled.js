//libraries
import styled from "@emotion/styled";

//styled component with emotion
export const StyledAbilities = styled.div`
  margin: 2rem 0;

  strong {
    display: block;
    font-size: 1.5rem;
    font-weight: 600;

    @media (min-width: 768px) {
      font-size: 1.75rem;
    }
  }

  .ability {
    font-size: 1.25rem;
    text-transform: capitalize;
    margin-top: 1rem;
    position: relative;
    padding-left: 30px;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #c11313;
      border: solid 2px #171923;
    }
  }
`;
