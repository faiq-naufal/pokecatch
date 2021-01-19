import PropTypes from "prop-types";
import { StyledSolidButton } from "./styled";

export default function SolidButton({ children, ...rest }) {
  return <StyledSolidButton {...rest}>{children}</StyledSolidButton>;
}

SolidButton.propTypes = {
  children: PropTypes.node,
  rest: PropTypes.any,
};
