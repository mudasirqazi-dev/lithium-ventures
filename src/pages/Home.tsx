import Container from "../components/Container";
import TableContainer from "../components/TableContainer";
import { Heading, SubHeading, Padding } from "../controls";

function Home() {
  return (
    <Container>
      <Heading>Payouts</Heading>
      <Padding>
        <SubHeading>Payouts History</SubHeading>
        <TableContainer />
      </Padding>
    </Container>
  );
}

export default Home;
