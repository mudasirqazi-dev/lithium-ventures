import styled from "styled-components";

const Padding = styled.div`
  padding: 0px 30px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const RowContentEnd = styled(Row)`
  justify-content: end;
`;
const RowContentCenter = styled(Row)`
  justify-content: center;
  margin-top: 20px;
`;
const Searchbar = styled.input`
  border-radius: 8px;
  height: 30px;
  width: 200px;
  padding: 4px 8px;
  justify-content: end;
`;
const SearchButton = styled.button`
  border-radius: 8px;
  height: 40px;
  width: 80px;
  padding: 4px 8px;
  margin-left: 10px;
`;
const Heading = styled.h3`
  font-weight: 600;
  font-size: 40px;
`;
const SubHeading = styled.h3`
  font-weight: 600;
  font-size: 20px;
`;
const Table = styled.table`
  width: 100%;
  th {
    color: #6f767e;
    font-size: 12px;
    font-weight: 500;
    text-align: start;
  }
  td {
    padding: 4px 8px;
  }
  tbody tr {
    height: 40px; /*48px*/
    font-size: 14px;
    font-weight: 600;
  }
  tbody tr:nth-of-type(odd) {
    background-color: #f8f8f8;
  }
`;
const Th3 = styled.th`
  justify-content: end;
`;
const Td1 = styled.td`
  color: #6f767e;
`;
const Td3 = styled.td`
  color: #1a1d1f;
  text-align: end;
`;
const Pill = styled.div`
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
`;
const PillGrey = styled(Pill)`
  background-color: #6f767e;
  color: #fff;
  width: 70px;
`;
const PillGreen = styled(Pill)`
  background-color: #60ca57;
  width: 45px;
`;

export {
  Padding,
  Row,
  RowContentEnd,
  RowContentCenter,
  Searchbar,
  SearchButton,
  Heading,
  SubHeading,
  Table,
  Th3,
  Td1,
  Td3,
  PillGrey,
  PillGreen,
};
