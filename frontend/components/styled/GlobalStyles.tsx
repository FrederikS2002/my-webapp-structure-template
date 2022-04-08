import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    cursor: default;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background: ${({theme}: any) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-size: 1.15em;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
`

export default GlobalStyles