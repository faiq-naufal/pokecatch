import styled from "@emotion/styled";

export const StyledDetailSideLayout = styled.div`
  max-width: 260px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    text-transform: capitalize;
    font-size: 2.5rem;
    border: solid 4px #171923;
    padding: 6px 12px;
    text-align: center;
    margin-bottom: 2rem;
    box-shadow: 6px 8px 0 0 #171923;
  }

  .detail__sidebar-height-weight {
    margin-top: 2rem;
    font-size: 1.5rem;
    letter-spacing: 0.5px;
    font-weight: 600;
    padding: 0.5rem 0.875rem;
    border: solid 4px #171923;

    hr {
      margin: 0.5rem 0;
      border: solid 2px #171923;
    }
  }
`;

export const CardDetail = styled.div`
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e2e0da;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  .card__id {
    margin-top: 1.25rem;
    background: #fff;
    border-radius: 20px;
    padding: 0.25rem 0.75rem;
    text-align: center;
    font-size: 1.25rem;
    letter-spacing: 0.25px;
    border: none;
  }
`;
