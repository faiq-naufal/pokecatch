import styled from "@emotion/styled";

export const StyledTopSection = styled.div`
  padding: 1.75rem 0;
  text-align: center;

  @media (min-width: 768px) {
    padding: 2rem 0;
  }

  h1 {
    font-size: 2.25rem;

    @media (min-width: 768px) {
      font-size: 3.25rem;
    }
  }

  p {
    margin-top: 0.75rem;
    font-size: 1.5rem;
    line-height: 1.2;

    @media (min-width: 768px) {
      font-size: 1.75rem;
    }
  }
`;
