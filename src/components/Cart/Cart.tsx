import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { RootState } from "../../store/rootReducer";
import {
  removeFromCart,
  CartItem,
  increaseItemQuantity,
} from "../../store/slices/cart";

import { WrapperContainer } from "../WrapperContainer";

import { formatPrice } from "../../utils/formatPrice";

export const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <WrapperContainer>
      <h2>Cart</h2>
      {cart.length
        ? cart.map((cartItem: CartItem, index) => (
            <CartItemWrapper key={index}>
              <CartItemTitle>{cartItem.title}</CartItemTitle>
              <div>Price: {formatPrice(cartItem.price)}</div>
              <div>
                Qty: {cartItem.quantity}{" "}
                <button
                  onClick={() => dispatch(increaseItemQuantity(cartItem.id))}
                >
                  +
                </button>
              </div>
              <button onClick={() => dispatch(removeFromCart(cartItem.id))}>
                remove from cart
              </button>
            </CartItemWrapper>
          ))
        : "No items :("}
    </WrapperContainer>
  );
};

const CartItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const CartItemTitle = styled.div`
  flex-basis: 40%;
`;
