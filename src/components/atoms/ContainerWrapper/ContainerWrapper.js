import { StyledContainerWrapper } from "./styled";
import PropTypes from "prop-types";

export default function ContainerWrapper({ children, ...rest }) {
  return <StyledContainerWrapper {...rest}>{children}</StyledContainerWrapper>;
}

ContainerWrapper.propTypes = {
  children: PropTypes.node,
};
