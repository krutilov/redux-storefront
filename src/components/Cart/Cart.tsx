import * as React from "react";
import { useSelector } from "react-redux";

import { CartItem, cartItemsSelector } from "../../store/slices/cart";

import { WrapperContainer } from "../WrapperContainer";
import { CartProduct } from "../CartProduct";

export const Cart: React.FC = () => {
  const cartItems = useSelector(cartItemsSelector);

  return (
    <WrapperContainer>
      <h2>Cart</h2>
      {cartItems.length
        ? cartItems.map((cartItem: CartItem) => (
            <CartProduct
              key={cartItem.id}
              id={cartItem.id}
              title={cartItem.title}
              price={cartItem.price}
              quantity={cartItem.quantity}
            />
          ))
        : "No items :("}
    </WrapperContainer>
  );
};
