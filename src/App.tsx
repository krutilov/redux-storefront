import * as React from "react";
import styled from "styled-components";

import { Counter } from "./components/Counter";
import { ProductList } from "./components/ProductList";
import { AppHeader } from "./components/AppHeader";

export const App: React.FC = () => {
  return (
    <AppWrapper>
      <AppHeader />
      <Counter />
      <ProductList />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
`;
