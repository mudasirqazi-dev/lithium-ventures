import React, { ReactNode, useState } from "react";
import styled from "styled-components";

function Table() {
  const [keyword, setKeyword] = useState<string>("");
  const Row = styled.div`
    display: flex;
    flex-direction: row;
  `;
  const RowContentEnd = styled(Row)`
    justify-content: end;
  `;
  const RowContentCenter = styled(Row)`
    justify-content: center;
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

  return (
    <>
      <RowContentEnd>
        <Searchbar
          placeholder="Search with username"
          value={keyword}
          onChange={(e) => setKeyword(e?.target?.value)}
        />
        <SearchButton>Search</SearchButton>
      </RowContentEnd>
      <div style={{ marginTop: 20 }}>
        <RowContentCenter>Table</RowContentCenter>
      </div>
    </>
  );
}

export default Table;
