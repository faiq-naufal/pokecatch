import { Global, css } from "@emotion/react";
import PropTypes from "prop-types";

const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html,
      body,
      #__next {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        min-height: 100%;
        min-height: calc(var(--vh, 1vh) * 100);
        height: auto;
      }
      body {
        font-family: "VT323", "Helvetica Neue", "Arial", "sans-serif";
        background-color: #f6f4f1;
        font-size: 1rem;
        color: #171923;
      }

      .vt323 {
        font-family: "VT323", "Helvetica Neue", "Arial", "sans-serif";
      }

      #nprogress .bar {
        height: 4px;
      }
    `}
  />
);

export default function Theme({ children }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}

Theme.propTypes = {
  children: PropTypes.node,
};
