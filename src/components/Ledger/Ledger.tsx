import * as React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../store/rootReducer";
import { CartItem } from "../../store/slices/cart";

import { WrapperContainer } from "../WrapperContainer";

import { formatPrice } from "../../utils/formatPrice";

export const Ledger: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const discountPercent: number = useSelector(
    (state: RootState) => state.cart.discountPercent
  );

  const totalPrice: number = cart.length
    ? cart.reduce(
        (total: number, current: CartItem) =>
          (total += current.price * current.quantity),
        0
      )
    : 0;

  return (
    <WrapperContainer>
      <h2>Ledger</h2>
      <div>Price: {formatPrice(totalPrice)}</div>
      {discountPercent > 0 && <div>Discount: {discountPercent}%</div>}

      <div>
        Total: {formatPrice(totalPrice - (totalPrice / 100) * discountPercent)}
      </div>
    </WrapperContainer>
  );
};
