import React from "react";
import styled from "styled-components";

function Heading() {
  const H3 = styled.h3`
    font-weight: 600;
    font-size: 40px;
  `;

  return <H3>Payouts</H3>;
}

export default Heading;
