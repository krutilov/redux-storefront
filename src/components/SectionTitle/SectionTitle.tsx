import * as React from "react";
import styled from "styled-components";

interface SectionTitleProps {
  title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return <Title>{title}</Title>;
};

const Title = styled.h2`
  margin: 0;
  margin-bottom: 48px;
`;
