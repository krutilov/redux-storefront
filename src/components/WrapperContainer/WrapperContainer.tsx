import * as React from "react";
import styled from "styled-components";

interface WrapperProps {
  children: React.ReactNode;
}

export const WrapperContainer: React.FC<WrapperProps> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`;
