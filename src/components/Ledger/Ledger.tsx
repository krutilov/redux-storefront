import * as React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../store/rootReducer";

import { WrapperContainer } from "../WrapperContainer";

import { formatPrice } from "../../utils/formatPrice";

import { taxSelector } from "../../store/slices/cart";

export const Ledger: React.FC = () => {
  const discountPercent: number = useSelector(
    (state: RootState) => state.cart.discountPercent
  );
  const totalPrice: number = useSelector(
    (state: RootState) => state.cart.total
  );

  const test = useSelector(taxSelector);

  return (
    <WrapperContainer>
      <h2>Ledger</h2>
      <h2>{test}</h2>
      <div>Price: {formatPrice(totalPrice)}</div>
      {discountPercent > 0 && <div>Discount: {discountPercent}%</div>}

      <div>
        Total: {formatPrice(totalPrice - (totalPrice / 100) * discountPercent)}
      </div>
    </WrapperContainer>
  );
};
