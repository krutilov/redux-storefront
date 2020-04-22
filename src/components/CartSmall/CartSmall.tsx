import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";

export const CartSmall: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);

  // TODO: Refactor to use actual types

  const totalPrice: number = cart.length
    ? cart.reduce(
        (total, current: any) => (total += current.price * current.quantity),
        0
      )
    : 0;

  return (
    <div>
      Cart items: {cart.length || 0} Total: {totalPrice}
    </div>
  );
};
