import {createGlobalStyle} from 'styled-components';
import variables from './utils';

export const GlobalStyle = createGlobalStyle`
  ${variables}
  @font-face {
    font-family: SpaceGrotesk;
    src: url("/fonts/SpaceGrotesk-VariableFont_wght.ttf") format("truetype");
  }
  html, body {
    padding: 0;
    margin: 0;
    font-family: SpaceGrotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #D9D9D9;
  }
  *, *::before, *::after {
    font-family: SpaceGrotesk;
    box-sizingL border-box;
    padding: 0;
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
    }
  }
  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
  li {
    list-style: none;
  }
`;
