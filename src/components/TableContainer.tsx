import React, { useEffect, useState } from "react";
import {
  RowContentCenter,
  RowContentEnd,
  SearchButton,
  Searchbar,
} from "../controls";
import Datatable from "./Datatable";
import apiService from "../services/api";

function TableContainer() {
  const [keyword, setKeyword] = useState<string>("");
  const [list, setList] = useState<any[]>([]);
  const [metadata, setMetadata] = useState<any>(null);

  useEffect(() => {
    reload();
  }, []);

  const reload = async () => {
    let result = await apiService.getAll();
    if (result?.error) {
      alert(result.error);
      return;
    }

    let data: any = result?.data;
    setList(data?.data);
    setMetadata(data?.metadata);
  };

  const handleSearch = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!keyword) return;

    // let result = await apiService.search(keyword);
    // if (result?.error) {
    //   alert(result.error);
    //   return;
    // }

    // let data: any = result?.data;
    // setList(data?.data);
    // setMetadata(data?.metadata);
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
      <RowContentCenter>
        <Datatable data={list} />
      </RowContentCenter>
    </>
  );
}

export default TableContainer;
