import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { primaryFont } from '@styles/typography';

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    html {
        box-sizing: border-box;
        font-size: 16px;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        margin: 0;
        height: 100vh;
        font-family: ${primaryFont};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;
