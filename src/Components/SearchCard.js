import React, { useEffect, useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchCard = ({ value, data, FilteredArray, setFilteredArray }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  useEffect(() => {
    let timer;
    const debounceDelay = 300;
    const debouncedSearch = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        filterBySearchTerm(searchTerm);
      }, debounceDelay);
    };

    debouncedSearch();

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  const filterBySearchTerm = (term) => {
    let filteredResults;
    if (value === 0) {
      filteredResults = data.filter((item) => item.hasOwnProperty("owner_id"));
    } else {
      filteredResults = data;
    }

    if (term?.length !== 0) {
      const res = filteredResults.filter((item) =>
        item.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredArray(res);
    } else {
      setFilteredArray(filteredResults);
    }
  };

  return (
    <div>
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchCard;
