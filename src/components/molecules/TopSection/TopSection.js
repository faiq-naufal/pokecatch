import { StyledTopSection } from "./styled";
import PropTypes from "prop-types";

export default function TopSection({ children }) {
  return (
    <StyledTopSection>
      <h1>{children}</h1>
    </StyledTopSection>
  );
}

TopSection.propTypes = {
  children: PropTypes.node,
};
