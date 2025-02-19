import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import styled, { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

import { GlobalStyles } from "./styles/global";
import { lightTheme, darkTheme } from "./styles/theme";

import { AppHeader } from "./components/AppHeader";

import { CheckoutContainer } from "./containers/CheckoutContainer";
import { ProductsContainer } from "./containers/ProductsContainer";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Normalize />
      <GlobalStyles />
      <Router>
        <AppHeader />
        <ContentWrapper>
          <Route path="/" exact component={ProductsContainer}></Route>
          <Route path="/checkout" exact component={CheckoutContainer}></Route>
        </ContentWrapper>
      </Router>
    </ThemeProvider>
  );
};

const ContentWrapper = styled.div`
  margin: 64px 0;
`;
