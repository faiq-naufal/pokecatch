//libraries
import PropTypes from "prop-types";

//styled component with emotion
import { StyledSolidButton } from "./styled";

//this is component for making solid button
export default function SolidButton({ children, ...rest }) {
  return <StyledSolidButton {...rest}>{children}</StyledSolidButton>;
}

//type checking
SolidButton.propTypes = {
  children: PropTypes.node,
  rest: PropTypes.any,
};
