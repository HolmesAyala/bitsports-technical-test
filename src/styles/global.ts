import { createGlobalStyle } from 'styled-components';

import { fontsDeclaration, FONT_FAMILY, BASE_FONT_SIZE } from './fonts';

export const GlobalStyle = createGlobalStyle`
  ${fontsDeclaration};

  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: ${FONT_FAMILY};
    font-size: ${BASE_FONT_SIZE};
  }
`;
