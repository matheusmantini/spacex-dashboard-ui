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
    --bg-color: #063970;
    --color-gray:#666767;
    --color-white: #FFFFFF;
    --color-success: #1fa02d;
    --color-failure:#C11b1b;
  }
`;

export default GlobalStyle;