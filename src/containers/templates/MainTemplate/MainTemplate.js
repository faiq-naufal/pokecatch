import PropTypes from "prop-types";
import Header from "../../organisms/Header/Header";
import Navbar from "../../organisms/Navbar/Navbar";
import { StyledMainTemplate } from "./styled";

export default function MainTemplate({ children }) {
  return (
    <StyledMainTemplate>
      <Header />
      <Navbar />
      <main>{children}</main>
    </StyledMainTemplate>
  );
}

MainTemplate.propTypes = {
  children: PropTypes.node,
};
