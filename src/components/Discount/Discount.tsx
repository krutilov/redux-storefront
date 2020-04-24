import * as React from "react";
import { useDispatch } from "react-redux";
import { applyDiscount } from "../../store/slices/cart";

export const Discount: React.FC = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(applyDiscount()); // Mock 10 percent discount
  };

  return (
    <div>
      <h3>Discount</h3>
      <form action="" onSubmit={handleFormSubmit}>
        <input placeholder="Coupon code" type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
};
