'use client';

import { createGlobalStyle, css } from 'styled-components';

const styles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    width: 100vw;
    height: 100vh;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;
