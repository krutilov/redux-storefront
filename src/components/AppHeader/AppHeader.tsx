import * as React from "react";
import styled from "styled-components";

export const AppHeader: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderInner>Header</HeaderInner>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  background: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const HeaderInner = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`;
