//libraries
import styled from "@emotion/styled";

//styled component with emotion
export const StyledSolidButton = styled.button`
  border: solid 4px #000;
  background: #c11313;
  color: #fff;
  font-family: inherit;
  outline: none;
  cursor: pointer;
  padding: 6px 12px;
  font-size: 1.5rem;
  text-align: center;
  box-shadow: 6px 8px 0 0 #000;
  text-decoration: none;
  transition: all 200ms ease-in;
  border-radius: 8px;

  @media (min-width: 768px) {
    padding: 6px 12px;
    font-size: 1.75rem;
  }

  &:hover {
    background: #820d0d;
  }
`;
