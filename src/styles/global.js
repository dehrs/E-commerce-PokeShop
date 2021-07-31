import { createGlobalStyle } from 'styled-components';
import '@material/react-linear-progress/dist/linear-progress.css';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
 :root {
    --background: #6EC48B;
    --background-button: #E46654;
    /* --text-title: #000000;
    --text-body: #8D8D8D;
    --background-header: #F1F1F1;
    --background-link: #0000000d;
    --background-step-active: #61CB46;
    --color-line-step:#E8E8E8;
    --background-step-disabled: #BEBEBE;
    --background-panel: #F7F7F7;
    --color-white:#FFFFFF;
    --color-text-gray: #A5A5A5;
    --color-text-gray1: #535353;
    --color-gray-2: #BDBDBD;
    --color-gray-3: #A8A8A8;
    --color-gray-4: #808080;
    --color-yellow: #FFCC00;
    --color-text-promotion: #9E7D27; */
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
