import { createGlobalStyle } from "./styled-components";
import bgImage from "../assets/backMath.jpg";

export const GlobalStyles = createGlobalStyle`
  body {
    background-image: url(${bgImage});
    height: 100vh;
  }
`;
