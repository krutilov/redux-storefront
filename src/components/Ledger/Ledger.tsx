import * as React from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "../../utils/formatPrice";

import { WrapperContainer } from "../WrapperContainer";

import {
  cartTotalSelector,
  cartTotalWithDiscountSelector,
  cartDiscountPercentSelector,
} from "../../store/slices/cart";

export const Ledger: React.FC = () => {
  const discountPercent: number = useSelector(cartDiscountPercentSelector);
  const totalPrice = useSelector(cartTotalSelector);
  const totalPriceWithDiscount = useSelector(cartTotalWithDiscountSelector);

  return (
    <WrapperContainer>
      <h2>Ledger</h2>
      <div>Price: {formatPrice(totalPrice)}</div>
      {discountPercent > 0 && <div>Discount: {discountPercent}%</div>}
      <div>Total: {formatPrice(totalPriceWithDiscount)}</div>
    </WrapperContainer>
  );
};
