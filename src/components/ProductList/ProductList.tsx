import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { RootState } from "../../store/rootReducer";
import { fetchProducts } from "../../store/slices/products";
import { Product } from "../../store/slices/products";

import { WrapperContainer } from "../WrapperContainer";
import { SectionTitle } from "../SectionTitle";
import { ProductCard } from "../ProductCard";

export const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.items);
  const isLoading = useSelector((state: RootState) => state.products.isLoading);

  React.useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, [products, dispatch]);

  return (
    <WrapperContainer>
      <SectionTitle title="Product list"></SectionTitle>
      <Grid>
        {isLoading
          ? "Loading items"
          : products.map((product: Product) => (
              <GridItem key={product.id}>
                <ProductCard
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  imageUrl={product.imageUrl}
                  price={product.price}
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
