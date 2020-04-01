import { Box, Text, Heading, Card } from "rimble-ui";
import styled from "styled-components";
import BorrowBalances from "../../containers/CompoundPositions";

const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const DataContainer = styled(Box)`
  text-align: center;
`;

const Balances = () => {
  return (
    <Container mb="2">
      <DataContainer m="2">
        <Heading as="h4">Supply Balance</Heading>
        <Text>$123.00</Text>
      </DataContainer>
      <DataContainer m="2">
        <Heading as="h4">Borrow Balance</Heading>
        <Text>$123.00</Text>
      </DataContainer>
      <DataContainer m="2">
        <Heading as="h4">Borrow Limit</Heading>
        <Text>56%</Text>
      </DataContainer>
    </Container>
  );
};

export default Balances;
