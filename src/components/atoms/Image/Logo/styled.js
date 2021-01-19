import styled from "@emotion/styled";

export const StyledLogo = styled.div`
  display: inline-flex;
  a {
    display: inline-flex;
    max-width: 200px;
    width: 100%;
    height: auto;

    @media (min-width: 768px) {
      max-width: 280px;
    }

    img {
      max-width: 100%;
      max-height: 48px;
      height: auto;
    }
  }
`;
