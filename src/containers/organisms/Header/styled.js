//libraries
import styled from "@emotion/styled";

//styled component with emotion
export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 56px;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  background: #c11313;
  z-index: 10;

  @media (min-width: 768px) {
    padding: 0.5rem 0;
    min-height: 80px;
  }

  .header__body {
    display: flex;
    justify-content: center;

    @media (min-width: 768px) {
      justify-content: flex-start;
    }
  }
`;
