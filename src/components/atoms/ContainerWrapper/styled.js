//libraries
import styled from "@emotion/styled";

//styled component with emotion
export const StyledContainerWrapper = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 10px;

  @media (min-width: 480px) {
    padding: 0 12px;
  }

  @media (min-width: 768px) {
    padding: 0 16px;
  }

  @media (min-width: 992px) {
    padding: 0 20px;
  }

  @media (min-width: 1200px) {
    padding: 0 24px;
    max-width: 1200px;
  }
`;
