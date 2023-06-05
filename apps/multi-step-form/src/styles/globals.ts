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
    background: var(--theme-background-color);
    transition: background 0.3s;
  }

  body {
    position: relative;
    background: var(--theme-background-color);
  }

  // body::after {
  //   position: fixed;
  //   content: "";
  //   width: 90%;
  //   height: 50%;
  //   top: 100px;
  //   left: 50%;
  //   z-index: 100;
  //   border-radius: 10px;
  //   transform: translate(-50%, 0%);
  //   background: var(--theme-white);
  //     box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.0951141);
  //   @media(min-width: 992px) {
  //     position: fixed;
  //     width: 940px;
  //     height: 600px;
  //     top: 50%;
  //     left: 50%;
  //     transform: translate(-50%, -50%);
  //     border-radius: 15px;
  //   }
  // }
  body > * {
    position: relative;
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
