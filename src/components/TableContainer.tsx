import React, { useEffect, useState } from "react";
import {
  IconLoading,
  RowContentCenter,
  RowContentEnd,
  RowContentStart,
  RowSearchArea,
  SearchButton,
  Searchbar,
  Text,
} from "../controls";
import Datatable from "./Datatable";
import apiService from "../services/api";
import Pagination from "./Pagination";
import { Metadata, Record } from "../types";
import imgLoading from "../media/loading.gif";

function TableContainer() {
  const [page, setPage] = useState<number>(1);
  const [keyword, setKeyword] = useState<string>("");
  const [list, setList] = useState<Record[]>([]);
  const [metadata, setMetadata] = useState<Metadata>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    reload();
  }, [page]);

  const reload = async () => {
    setIsLoading(true);
    let result = await apiService.getAll(page);
    if (result?.error) {
      alert(result.error);
      return;
    }

    let data: any = result?.data;
    setList(data?.data as Record[]);
    setMetadata(data?.metadata as Metadata);
    setIsLoading(false);
  };

  const handleSearch = async () => {
    if (!keyword) return;

    setIsLoading(true);
    let result = await apiService.search(keyword);
    if (result?.error) {
      alert(result.error);
      return;
    }

    let data: Record[] = result?.data || [];
    setList(data);
    setIsLoading(false);
  };

  const handleClear = () => {
    setKeyword("");
    reload();
  };

  const handleNext = () => {
    if (!metadata) return;
    if (page >= metadata?.totalCount) return;
    let _page = page + 1;
    setPage(_page);
  };

  const handlePrev = () => {
    if (!metadata) return;
    if (page <= 1) return;
    let _page = page - 1;
    setPage(_page);
  };

  const handleFirst = () => setPage(1);

  const handleLast = () => {
    if (!metadata) return;
    setPage(metadata?.totalCount);
  };

  return (
    <>
      <RowSearchArea>
        <RowContentStart>
          {isLoading && (
            <>
              <IconLoading src={imgLoading} alt="Loading..." />
              <Text>Loading...</Text>
            </>
          )}
        </RowContentStart>
        <RowContentEnd>
          <Searchbar
            placeholder="Search with username"
            value={keyword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setKeyword(e?.target?.value)
            }
          />
          <SearchButton onClick={handleSearch}>Search</SearchButton>
          <SearchButton onClick={handleClear}>Clear</SearchButton>
        </RowContentEnd>
      </RowSearchArea>
      {list?.length > 0 && (
        <RowContentCenter>
          <Datatable data={list} />
        </RowContentCenter>
      )}
      {!isLoading && list?.length === 0 && <Text>No record found.</Text>}
      {list?.length > 0 && metadata && (
        <RowContentEnd>
          <Pagination
            data={metadata}
            onNext={handleNext}
            onPrev={handlePrev}
            onFirst={handleFirst}
            onLast={handleLast}
          />
        </RowContentEnd>
      )}
    </>
  );
}

export default TableContainer;
