import { StyledErrorMessage } from "./styled";
import ContainerWrapper from "../ContainerWrapper/ContainerWrapper";
import PropTypes from "prop-types";

export default function ErrorMessage({ children }) {
  return (
    <StyledErrorMessage>
      <ContainerWrapper>{children}</ContainerWrapper>
    </StyledErrorMessage>
  );
}

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
};
