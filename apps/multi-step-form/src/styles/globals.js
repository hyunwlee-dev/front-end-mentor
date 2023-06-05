import { createGlobalStyle } from 'styled-components';
import { variables } from './utils';

export const GlobalStyle = createGlobalStyle`
  ${variables}
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "Josefin Sans", -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
    font-size: 16px;
    // background: var(--theme-background-color);
    color: var(--theme-natural-color);
    transition: background 0.3s;
  }

  body {
    position: relative;
    ::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 200px;
      // background: var(--theme-background-image) no-repeat;
      background-size: cover;
      content: "";
    }
    * {
      position: relative;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    font-family: "Josefin Sans", sans-serif;
    font-size: 18px;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

`;
