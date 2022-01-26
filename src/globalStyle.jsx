import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
    font-family: Museo-Sans-500, Helvetica Neue, Helvetica, Arial, sans-serif;
    text-align:center;
   }

   *,  
  ::before,
  ::after {
  box-sizing: border-box;
  }


`;

export default GlobalStyle;
