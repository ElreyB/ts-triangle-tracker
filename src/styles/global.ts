import { createGlobalStyle } from "./styled-components";
import bgImage from "../assets/backMath.jpg";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box
  }
  body {
    background-image: url(${bgImage});
  }
`;
