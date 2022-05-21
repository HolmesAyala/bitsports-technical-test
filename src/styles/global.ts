import { createGlobalStyle } from 'styled-components';

import { fontsDeclaration, FONT_FAMILY, BASE_FONT_SIZE } from './fonts';

export const GlobalStyle = createGlobalStyle`
  ${fontsDeclaration};

  body {
    margin: 0;
    font-family: ${FONT_FAMILY};
    /* Base for rem unit */
    font-size: ${BASE_FONT_SIZE};
  }
`;
