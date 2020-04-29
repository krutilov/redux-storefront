import * as React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

export const ProductCardLoading: React.FC = () => {
  return (
    <>
      <CardRow>
        <Skeleton height={300} />
      </CardRow>
      <CardRow>
        <Skeleton count={2} />
      </CardRow>
      <CardRow>
        <Skeleton height={40} />
      </CardRow>
    </>
  );
};

const CardRow = styled.div`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
