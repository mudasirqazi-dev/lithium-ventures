import React, { ReactNode, useState } from "react";
import {
  RowContentCenter,
  RowContentEnd,
  SearchButton,
  Searchbar,
} from "../controls";

function Table() {
  const [keyword, setKeyword] = useState<string>("");
  const handleSearch = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!keyword) return;
    console.log(keyword);
  };

  return (
    <>
      <RowContentEnd>
        <Searchbar
          placeholder="Search with username"
          value={keyword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setKeyword(e?.target?.value)
          }
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </RowContentEnd>
      <RowContentCenter>Table</RowContentCenter>
    </>
  );
}

export default Table;
