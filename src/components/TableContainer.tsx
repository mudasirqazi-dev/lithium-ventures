import React, { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

function TableContainer({ children }: Props) {
  const Div = styled.div`
    padding: 0px 30px;
  `;

  return <Div>{children}</Div>;
}

export default TableContainer;
