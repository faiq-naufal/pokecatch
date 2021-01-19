//libraries
import styled from "@emotion/styled";

//styled component with emotion
export const StyledErrorMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.25;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;
