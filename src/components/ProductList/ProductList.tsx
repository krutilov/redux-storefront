import * as React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { RootState } from "../../store/rootReducer";

import { ProductCard } from "../ProductCard";

export interface Product {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

export const ProductList: React.FC = () => {
  const products = useSelector((state: RootState) => state.products);

  return (
    <Wrapper>
      <h2>Product list</h2>
      <Grid>
        {products.map((product: Product) => (
          <GridItem key={product.id}>
            <ProductCard
              id={product.id}
              title={product.title}
              description={product.description}
              imageUrl={product.imageUrl}
              price={product.price}
              // TODO: Call dispatch from here
              // onClick={() => dispatch(product)}
            />
          </GridItem>
        ))}
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 960px;
  margin: 64px auto 64px auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 64px;
  grid-column-gap: 32px;
`;

const GridItem = styled.div`
  display: block;
`;
