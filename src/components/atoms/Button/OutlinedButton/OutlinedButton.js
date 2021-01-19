import PropTypes from "prop-types";
import { StyledOutlinedButton } from "./styled";

export default function OutlinedButton({ children, ...rest }) {
  return <StyledOutlinedButton {...rest}>{children}</StyledOutlinedButton>;
}

OutlinedButton.propTypes = {
  children: PropTypes.node,
  rest: PropTypes.any,
};
