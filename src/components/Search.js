import React, { useState } from "react";
import { Divider, Input } from "antd";

function Search({ searchFilter }) {
  const [search, setSearch] = useState("");

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
    searchFilter(e.target.value); //case sensitive
  };

  return (
    <>
      <Divider>Search</Divider>
      <div class="search">
        <Input value={search} type="text" onChange={handleSearchInput} />
      </div>
    </>
  );
}

export default Search;