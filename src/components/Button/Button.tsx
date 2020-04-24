import * as React from "react";
import styled from "styled-components";

interface ButtonProps {
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return <ButtonElement onClick={onClick}>{title}</ButtonElement>;
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
`;
