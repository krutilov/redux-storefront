import * as React from "react";

import { Cart } from "../../components/Cart";
import { Ledger } from "../../components/Ledger";
import { Discount } from "../../components/Discount";

export const CheckoutContainer: React.FC = () => {
  return (
    <>
      <Cart />
      <Ledger />
      <Discount />
    </>
  );
};
