//libraries
import PropTypes from "prop-types";

//components
import ContainerWrapper from "../ContainerWrapper/ContainerWrapper";

//styled component with emotion
import { StyledErrorMessage } from "./styled";

//this is component for displaying error message
export default function ErrorMessage({ children }) {
  return (
    <StyledErrorMessage>
      <ContainerWrapper>{children}</ContainerWrapper>
    </StyledErrorMessage>
  );
}

//type checking
ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
};
