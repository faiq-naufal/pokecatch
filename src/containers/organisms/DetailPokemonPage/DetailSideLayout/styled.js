//libraries
import styled from "@emotion/styled";

//styled component with emotion
export const StyledDetailSideLayout = styled.div`
  max-width: 260px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    text-transform: capitalize;
    font-size: 2rem;
    border: solid 4px #171923;
    padding: 6px 12px;
    text-align: center;
    margin-bottom: 2rem;
    box-shadow: 6px 8px 0 0 #171923;

    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
  }

  .detail__sidebar-height-weight {
    margin-top: 2rem;
    font-size: 1.25rem;
    letter-spacing: 0.5px;
    font-weight: 600;
    padding: 0.5rem 0.875rem;
    border: solid 4px #171923;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }

    hr {
      margin: 0.5rem 0;
      border: solid 2px #171923;
    }
  }
`;
