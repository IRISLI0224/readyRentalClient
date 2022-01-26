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

  .leaflet-container {
  height: 600px;
  width: 500px;
}

.leaflet-div-icon {
  background: transparent;
  border: none;
}
`;

export default GlobalStyle;
