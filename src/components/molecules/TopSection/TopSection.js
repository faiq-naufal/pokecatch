//libraries
import PropTypes from "prop-types";

//styled component with emotion
import { StyledTopSection } from "./styled";

//this is component for displaying top section heading at pokemon list and my pokemon list page
export default function TopSection({ children }) {
  return <StyledTopSection>{children}</StyledTopSection>;
}

//type checking
TopSection.propTypes = {
  children: PropTypes.node,
};
