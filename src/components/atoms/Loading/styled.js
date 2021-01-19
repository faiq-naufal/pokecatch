//libraries
import styled from "@emotion/styled";

//styled component with emotion
export const StyledLoading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .loading__img {
    display: block;
    max-width: 84px;

    img {
      display: block;
      animation: rotate 1.5s linear infinite;

      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
  }

  .loading__label {
    display: block;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    margin-top: 1rem;
  }
`;
