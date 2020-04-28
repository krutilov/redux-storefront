import * as React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { Product } from "../../store/slices/products";
import { addSingleProductToCart } from "../../store/slices/cart";

import { formatPrice } from "../../utils/formatPrice";

import { Button } from "../Button";

export const ProductCard: React.FC<Product> = ({
  id,
  title,
  imageUrl,
  price,
  isLoading,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (!isLoading) {
      dispatch(addSingleProductToCart(id));
    }
  };

  return (
    <CardWrapper>
      <ImageWrapper>
        <Image src={imageUrl} alt={title} />
      </ImageWrapper>
      <Title>{title}</Title>
      <Price>{formatPrice(price)}</Price>
      <Button
        onClick={handleAddToCart}
        title="Add to cart"
        isLoading={isLoading}
      ></Button>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
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
