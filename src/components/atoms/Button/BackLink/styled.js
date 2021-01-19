import styled from "@emotion/styled";

export const StyledBackLink = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
  font-size: 1.5rem;
  margin: 2.5rem 20px;
`;
