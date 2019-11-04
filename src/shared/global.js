import { createGlobalStyle, css } from 'styled-components';

export const fontUrl = 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900';

export const bodyStyles = css`
  .mat-toolbar{
    position: relative;
    z-index: 2;
    height: 50px;
  }

`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }
`;