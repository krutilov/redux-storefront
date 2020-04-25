import * as React from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "../../utils/formatPrice";

import { cartItemsSelector, cartTotalSelector } from "../../store/slices/cart";

export const CartSmall: React.FC = () => {
  const cart = useSelector(cartItemsSelector);
  const totalPrice: number = useSelector(cartTotalSelector);

  return (
    <div>
      Cart items: {cart.length || 0} Total: {formatPrice(totalPrice)}
    </div>
  );
};
