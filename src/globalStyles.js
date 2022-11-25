import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  :root {
    --color-yellow: #EAC435;
    --color-blue: #345995;
    --color-orange: #FB4D3D;
    --color-green: #03CEA4;
  }
`;

export default GlobalStyle;