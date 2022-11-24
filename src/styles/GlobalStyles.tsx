import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export type Props = {
  theme: typeof theme;
};
const GlobalStyles = createGlobalStyle<Props>`

 html {
  box-sizing: border-box;
 }
 
 body {
  background-color: ${({ theme }) => theme.colors.oliveDrab.shades[50]};
  color: ${({ theme }) => theme.colors.primary};
  font-family: 'Noto Sans Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
 }

 
 section {
  border-radius: 10px;
  text-align: center;
 }
 
 div {
  align-items: center;
  display: flex;
  justify-content: center;
 }
    

 a, label {
  color: ${({ theme }) => theme.colors.primary};
 }

 p, input {
  margin: 0;
 }

 button {
  border-radius: 5px;
  cursor: pointer;
 }

 label {
  margin-top: 5px;
 }

 @media (max-width: 645px) {
    label {
    margin: 0;
    }
 }

`;

export default GlobalStyles;
