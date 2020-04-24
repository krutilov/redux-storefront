import * as React from "react";
import styled from "styled-components";
import { CartSmall } from "../CartSmall";
import { Link } from "react-router-dom";

export const AppHeader: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <Link to="/">
          <Logo>Logo</Logo>
        </Link>
        <Link to="/checkout">
          <CartSmall></CartSmall>
        </Link>
      </HeaderInner>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
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
