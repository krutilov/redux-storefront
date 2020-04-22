import * as React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { Product } from "../ProductList/ProductList";

import { addToCart } from "../../store/slices/cart";

export const ProductCard: React.FC<Product> = ({
  id,
  title,
  imageUrl,
  price,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log(`Add to cart, product id — ${id}`);
    dispatch(addToCart(id));
  };

  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={imageUrl} alt={title} />
      </ImageWrapper>
      <Title>{title}</Title>
      <Price>{price}</Price>
      <button onClick={handleAddToCart}>Add to cart</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

const Image = styled.img`
  display: block;
  max-height: 350px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin: 0;
  margin-bottom: 8px;
`;

const Price = styled.div`
  margin-bottom: 8px;
`;
