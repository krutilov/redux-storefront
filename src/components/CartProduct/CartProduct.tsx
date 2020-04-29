import * as React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { formatPrice } from "../../utils/formatPrice";

import {
  CartItem,
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../../store/slices/cart";

import { ProgressRing } from "../ProgressRing";
import { Quantity } from "../Quantity";
import { Remove } from "../../icons/Remove";
import { Button } from "../Button";

export const CartProduct: React.FC<CartItem> = ({
  id,
  title,
  price,
  quantity,
}) => {
  const dispatch = useDispatch();
  const [deleteTimeout, setDeleteTimeout] = React.useState<boolean>(false);
  const [timer, setTimer] = React.useState<number>(0);
  // const [progress, setProgress] = React.useState<number>(0);

  const handleDelete = (): void => {
    setDeleteTimeout(true);
    const time = setTimeout(() => {
      dispatch(removeFromCart(id));
    }, 3500);
    setTimer(time);
  };

  const handleCancelDelete = React.useCallback(() => {
    setDeleteTimeout(false);
    clearTimeout(timer);
  }, [timer]);

  // React.useEffect(() => {
  //   const progressInterval = setInterval(() => {
  //     setProgress(progress + 10);
  //   }, 3000 / 10);

  //   if (progress === 100) {
  //     clearInterval(progressInterval);
  //   }
  // });

  return (
    <CartItemContainer>
      <CartItemTitle>{title}</CartItemTitle>
      <CartItemPrice>{formatPrice(price)}</CartItemPrice>
      <CartItemTotal>{formatPrice(price * quantity)}</CartItemTotal>
      <CartItemQuantity>
        <Quantity
          increaseQuantity={() => dispatch(increaseItemQuantity(id))}
          decreaseQuantity={() => dispatch(decreaseItemQuantity(id))}
          quantity={quantity}
        />
      </CartItemQuantity>
      <RemoveButton onClick={handleDelete}>
        <Remove size={16} />
      </RemoveButton>
      {deleteTimeout && (
        <RemoveContainer>
          <ProgressRing radius={10} stroke={1} />
          <UndoButtonContainer>
            <Button title="Cancel" onClick={handleCancelDelete} />
          </UndoButtonContainer>
        </RemoveContainer>
      )}
    </CartItemContainer>
  );
};

const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 8px;
  border-bottom: 1px solid #e3e3e3;
  position: relative;
`;

const CartItemTitle = styled.div`
  flex-basis: 40%;
`;

const CartItemPrice = styled.div`
  flex-basis: 20%;
`;

const CartItemQuantity = styled.div`
  flex-basis: 20%;
`;

const CartItemTotal = styled.div`
  flex-basis: 20%;
`;

const RemoveContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: rgba(255, 255, 255, 0.9);
`;

const UndoButtonContainer = styled.div`
  margin-left: 8px;
`;

const RemoveButton = styled.button`
  display: flex;
  width: 16px;
  height: 16px;
  border: 0;
  background: none;
  margin: 0;
  padding: 0;
`;
