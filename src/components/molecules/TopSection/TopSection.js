import { StyledTopSection } from "./styled";
import PropTypes from "prop-types";

export default function TopSection({ children }) {
  return <StyledTopSection>{children}</StyledTopSection>;
}

TopSection.propTypes = {
  children: PropTypes.node,
};
