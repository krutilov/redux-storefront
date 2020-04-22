import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";

import { ICartItem } from "../../store/slices/cart";

export const CartSmall: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.items);

  const totalPrice: number = cart.length
    ? cart.reduce(
        (total: number, current: ICartItem) =>
          (total += current.price * current.quantity),
        0
      )
    : 0;

  return (
    <div>
      Cart items: {cart.length || 0} Total: {totalPrice}
    </div>
  );
};
