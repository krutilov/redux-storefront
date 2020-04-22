import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../store/rootReducer";
import { removeFromCart, CartItem } from "../../store/slices/cart";

export const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((cartItem: CartItem, index) => (
        <div key={index}>
          <div>{cartItem.title}</div>
          <div>Price: {cartItem.price}</div>
          <div>Qty: {cartItem.quantity}</div>
          <button onClick={() => dispatch(removeFromCart(cartItem.id))}>
            remove from cart
          </button>
        </div>
      ))}
    </div>
  );
};
