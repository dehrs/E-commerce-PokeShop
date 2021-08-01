import { createGlobalStyle } from 'styled-components';
import '@material/react-linear-progress/dist/linear-progress.css';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
 :root {
    --background: #6EC48B;
    --background-button: #E46654;
 }

 #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

 * {
     margin:0;
     padding:0;
     box-sizing: border-box;
  }

 html{
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

   @media (max-width: 720px){
      font-size: 87.5%;
   }
 }

 body {
    background: var(--background);
    font-weight: 400;
 }

 body, input, button {
   font-family: Roboto, sans-serif;
  }

 strong {
  font-weight: 600;
 }

 button {
  cursor: pointer;
 }

 .mdc-linear-progress__bar-inner{
   background-color: var(--background-button);
 }
`;
