//libraries
import PropTypes from "prop-types";

//components
import Header from "../../organisms/Header/Header";
import Navbar from "../../organisms/Navbar/Navbar";

//styled component with emotion
import { StyledMainTemplate } from "./styled";

//this component is used to build the default template that will be used on every pages.
export default function MainTemplate({ children }) {
  return (
    <StyledMainTemplate>
      <Header />
      <Navbar />
      <main>{children}</main>
    </StyledMainTemplate>
  );
}

//type checking
MainTemplate.propTypes = {
  children: PropTypes.node,
};
