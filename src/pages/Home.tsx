import Container from "../components/Container";
import Table from "../components/Table";
import { Heading, SubHeading, Padding } from "../controls";

function Home() {
  return (
    <Container>
      <Heading>Payouts</Heading>
      <Padding>
        <SubHeading>Payouts History</SubHeading>
        <Table />
      </Padding>
    </Container>
  );
}

export default Home;
