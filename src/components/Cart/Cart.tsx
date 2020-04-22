import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/rootReducer";

import { removeFromCart, ICartItem } from "../../store/slices/cart";

export const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item: ICartItem, index) => (
        <div key={index}>
          <div>{item.title}</div>
          <div>Price: {item.price}</div>
          <div>Qty: {item.quantity}</div>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            remove from cart
          </button>
        </div>
      ))}
    </div>
  );
};
