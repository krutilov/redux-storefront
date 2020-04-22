import * as React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { RootState } from "../../store/rootReducer";

import { ProductCard } from "../ProductCard";

import { IProduct } from "../../store/slices/products";

export const ProductList: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.items);

  return (
    <Wrapper>
      <h2>Product list</h2>
      <Grid>
        {products.map((product: IProduct) => (
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
  padding: 0 16px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 64px;
  grid-column-gap: 32px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const GridItem = styled.div`
  display: block;
`;
