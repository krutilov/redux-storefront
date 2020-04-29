import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import {
  Product,
  productsSelector,
  productsLoadingStatusSelector,
  fetchProducts,
} from "../../store/slices/products";

import { WrapperContainer } from "../WrapperContainer";
import { SectionTitle } from "../SectionTitle";
import { ProductCard } from "../ProductCard";
import { ProductCardLoading } from "../ProductCardLoading";

export const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelector);
  const isLoading = useSelector(productsLoadingStatusSelector);

  React.useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, [products, dispatch]);

  return (
    <WrapperContainer>
      <SectionTitle title="Product list"></SectionTitle>
      <Grid>
        {isLoading ? (
          <GridLoader></GridLoader>
        ) : (
          products.map((product: Product) => (
            <GridItem key={product.id}>
              <ProductCard
                id={product.id}
                title={product.title}
                description={product.description}
                imageUrl={product.imageUrl}
                price={product.price}
                isLoading={product.isLoading}
              />
            </GridItem>
          ))
        )}
      </Grid>
    </WrapperContainer>
  );
};

const GridLoader: React.FC = () => {
  return (
    <>
      {[...Array(6)].map(() => (
        <GridItem>
          <ProductCardLoading />
        </GridItem>
      ))}
    </>
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
