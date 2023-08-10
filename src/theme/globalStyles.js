import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    transition: all 0.3s linear;
    background-color: ${({ theme }) => theme.color.bg};
    color: ${({ theme }) => theme.color.text};
  }
  button{
    border: ${({ $isDark }) =>
      $isDark ? `1px solid #000000` : "1px solid #ffffff"};
    color: ${({ $isDark }) => ($isDark ? "#000000" : "#ffffff")};
    background: none;
    padding: 6px 8px;
    border-radius: 6px;
  }
`;
