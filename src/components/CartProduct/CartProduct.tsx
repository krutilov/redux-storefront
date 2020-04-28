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
import { Remove } from "../../icons/Remove";

export const CartProduct: React.FC<CartItem> = ({
  id,
  title,
  price,
  quantity,
}) => {
  const dispatch = useDispatch();
  const [deleteTimeout, setDeleteTimeout] = React.useState<boolean>(false);
  const [timer, setTimer] = React.useState<number>(0);
  const [progress, setProgress] = React.useState<number>(0);

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
      <CartItemTitle>
        {title} {progress}
      </CartItemTitle>
      <div>Price: {formatPrice(price)}</div>
      <div>
        <button
          disabled={quantity < 2}
          onClick={() => dispatch(decreaseItemQuantity(id))}
        >
          -
        </button>
        Qty: {quantity}
        <button onClick={() => dispatch(increaseItemQuantity(id))}>+</button>
      </div>
      {deleteTimeout ? (
        <RemoveContainer>
          <ProgressRing radius={10} stroke={1} />
          <UndoButtonContainer>
            <button onClick={handleCancelDelete}>Cancel</button>
          </UndoButtonContainer>
        </RemoveContainer>
      ) : (
        <RemoveButton onClick={handleDelete}>
          <Remove size={16} />
        </RemoveButton>
      )}
    </CartItemContainer>
  );
};

const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const CartItemTitle = styled.div`
  flex-basis: 40%;
`;

const RemoveContainer = styled.div`
  display: flex;
  align-items: center;
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
