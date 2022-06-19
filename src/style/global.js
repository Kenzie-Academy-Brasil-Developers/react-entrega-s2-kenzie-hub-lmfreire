import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #000000;
    color: #F8F9FA;
  }

  body, input, button {
    font-family: 'PT Serif', serif;
    font-size: 1rem;
  }

  h1,h2,h3,h4 {
    font-family: 'Roboto Mono', monospace;
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }
`;
