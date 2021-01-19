import styled from "@emotion/styled";

export const StyledOutlinedLink = styled.a`
  border: solid 4px #000;
  color: #000;
  padding: 6px 12px;
  font-size: 1.5rem;
  text-align: center;
  box-shadow: 6px 8px 0 0 #c11313;
  transition: all 200ms ease-in;
  border-radius: 8px;
  font-family: inherit;

  @media (min-width: 768px) {
    padding: 6px 12px;
    font-size: 1.75rem;
  }

  &:hover {
    background: black;
    color: #fff;
  }
  text-decoration: none;
`;
