import * as React from "react";
import styled from "styled-components";

// import { Counter } from "./components/Counter";
import { ProductList } from "./components/ProductList";
import { AppHeader } from "./components/AppHeader";
import { Cart } from "./components/Cart";

export const App: React.FC = () => {
  return (
    <AppWrapper>
      <AppHeader />
      {/* <Counter /> */}
      <Cart />
      <ProductList />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
`;
