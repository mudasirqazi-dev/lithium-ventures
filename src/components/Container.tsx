import React, { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

function Container({ children }: Props) {
  const Div = styled.div`
    padding: 25px 30px;
  `;

  return <Div>{children}</Div>;
}

export default Container;
