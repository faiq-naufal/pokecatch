//libraries
import PropTypes from "prop-types";

//styled component with emotion
import { StyledContainerWrapper } from "./styled";

//this is component for making container that has max width of 1200px
export default function ContainerWrapper({ children, ...rest }) {
  return <StyledContainerWrapper {...rest}>{children}</StyledContainerWrapper>;
}

//type checking
ContainerWrapper.propTypes = {
  children: PropTypes.node,
  rest: PropTypes.any,
};
