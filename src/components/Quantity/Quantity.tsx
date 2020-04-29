import * as React from "react";
import styled from "styled-components";

import { Button } from "../Button";

interface Props {
  quantity: number;
  increaseQuantity: any;
  decreaseQuantity: any;
}

export const Quantity: React.FC<Props> = ({
  quantity,
  decreaseQuantity,
  increaseQuantity,
}) => {
  return (
    <Wrapper>
      <Button title="-" onClick={decreaseQuantity} />
      <Input type="text" value={quantity} readOnly />
      <Button title="+" onClick={increaseQuantity} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Input = styled.input`
  height: 40px;
  width: 40px;
  text-align: center;
  outline: none;
`;
