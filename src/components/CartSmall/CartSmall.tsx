import * as React from "react";
import styled, { keyframes } from "styled-components";
import { useSelector } from "react-redux";
import { formatPrice } from "../../utils/formatPrice";

import { cartItemsSelector, cartTotalSelector } from "../../store/slices/cart";

import { CartIcon } from "../../icons/CartIcon";

export const CartSmall: React.FC = () => {
  const cart = useSelector(cartItemsSelector);
  const totalPrice: number = useSelector(cartTotalSelector);

  return (
    <CartWrapper>
      <Price>{formatPrice(totalPrice)}</Price>
      <IconWrapper>
        <CartIcon />
        {cart.length > 0 && <IconBadge>{cart.length}</IconBadge>}
      </IconWrapper>
    </CartWrapper>
  );
};

const CartWrapper = styled.div`
  height: 40px;
  font-size: 14px;
  background-color: #e3e3e3;
  padding: 4px 4px;
  border-radius: 20px;
  display: flex;
  align-items: center;
`;

const Price = styled.div`
  padding: 0 8px;
`;

const IconWrapper = styled.div`
  border-radius: 100%;
  height: 30px;
  width: 30px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const iconBadgeAppear = keyframes`
  from {
    transform: scale(0)
  }
  to {
    transform scale(1) 
  }
`;

const IconBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  background: red;
  border-radius: 100%;
  font-size: 9px;
  color: #fff;
  text-decoration: none;
  position: absolute;
  bottom: -4px;
  left: -4px;
  animation: ${iconBadgeAppear} 0.3s;
`;
