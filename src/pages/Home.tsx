import React from "react";
import Heading from "../components/Heading";
import Container from "../components/Container";
import SubHeading from "../components/SubHeading";
import TableContainer from "../components/TableContainer";
import Table from "../components/Table";

function Home() {
  return (
    <Container>
      <Heading />
      <TableContainer>
        <SubHeading />
        <Table />
      </TableContainer>
    </Container>
  );
}

export default Home;
