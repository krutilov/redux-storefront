import * as React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { formatPrice } from "../../utils/formatPrice";

import {
  CartItem,
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../../store/slices/cart";

export const CartProduct: React.FC<CartItem> = ({
  id,
  title,
  price,
  quantity,
}) => {
  const dispatch = useDispatch();

  const handleDelete = (): void => {
    dispatch(removeFromCart(id));
  };

  return (
    <CartItemContainer>
      <CartItemTitle>{title}</CartItemTitle>
      <div>Price: {formatPrice(price)}</div>
      <div>
        <button onClick={() => dispatch(decreaseItemQuantity(id))}>-</button>
        Qty: {quantity}
        <button onClick={() => dispatch(increaseItemQuantity(id))}>+</button>
      </div>
      <button onClick={handleDelete}>remove from cart</button>
    </CartItemContainer>
  );
};

const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const CartItemTitle = styled.div`
  flex-basis: 40%;
`;
