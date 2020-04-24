import * as React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { RootState } from "../../store/rootReducer";
import { Product } from "../../store/slices/products";

import { ProductCard } from "../ProductCard";
import { WrapperContainer } from "../WrapperContainer";

export const ProductList: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.items);

  return (
    <WrapperContainer>
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
    </WrapperContainer>
  );
};

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
