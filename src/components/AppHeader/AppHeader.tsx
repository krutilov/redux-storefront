import * as React from "react";
import styled from "styled-components";
import { CartSmall } from "../CartSmall";

export const AppHeader: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <Logo>Logo</Logo>
        <CartSmall></CartSmall>
      </HeaderInner>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  background: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const HeaderInner = styled.div`
  width: 100%;
  padding: 0 32px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
