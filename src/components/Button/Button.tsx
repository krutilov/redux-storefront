import * as React from "react";
import styled from "styled-components";

interface ButtonProps {
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  isLoading,
}) => {
  return (
    <ButtonElement onClick={onClick}>
      {isLoading ? "loading" : title}
    </ButtonElement>
  );
};

const ButtonElement = styled.button`
  border: 0;
  border-radius: 3px;
  height: 40px;
  background: #3282b8;
  color: #fff;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
