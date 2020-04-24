import { createGlobalStyle } from "styled-components";

export interface Theme {
  theme: ThemeProps;
}

export interface ThemeProps {
  body: string;
  text: string;
}

export const GlobalStyles = createGlobalStyle<Theme>`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background-color: ${(theme: Theme) => theme.theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    transition: background-color 0.3s linear, color 0.3s linear;
    padding-top: 70px;
  }
`;
