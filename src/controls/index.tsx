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

export {
  Padding,
  Row,
  RowContentEnd,
  RowContentCenter,
  Searchbar,
  SearchButton,
  Heading,
  SubHeading,
};
