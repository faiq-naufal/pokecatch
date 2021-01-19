//libraries
import styled from "@emotion/styled";

//styled component with emotion
export const StyledDefaultDetailPage = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 300px 1fr;
    grid-gap: 2.5rem;
  }
`;
