//libraries
import { Global, css } from "@emotion/react";
import PropTypes from "prop-types";

// global style that applies to every pages
const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: "VT323", "Helvetica Neue", "Arial", "sans-serif";
        background-color: #f6f4f1;
        font-size: 1rem;
        color: #171923;
      }

      #nprogress .bar {
        height: 4px;
      }
    `}
  />
);

//this is theme component that wrap all children components inside it.
export default function Theme({ children }) {
  return (
    <>
      {/* this component only set the global style */}
      <GlobalStyle />
      {children}
    </>
  );
}

//type checking
Theme.propTypes = {
  children: PropTypes.node,
};
