//libraries
import PropTypes from "prop-types";

//styled component with emotion
import { StyledOutlinedButton } from "./styled";

//this is component for making outlined button
export default function OutlinedButton({ children, ...rest }) {
  return <StyledOutlinedButton {...rest}>{children}</StyledOutlinedButton>;
}

//type checking
OutlinedButton.propTypes = {
  children: PropTypes.node,
  rest: PropTypes.any,
};
