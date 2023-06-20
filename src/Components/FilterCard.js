import React, { useEffect, useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

const FilterCard = ({ value, data, FilteredArray, setFilteredArray }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setAnchorEl(null);
  };

  useEffect(() => {
    let filteredResults;
    if (value === 0) {
      filteredResults = data.filter((item) => item.hasOwnProperty("owner_id"));
    } else {
      filteredResults = data;
    }

    if (selectedOption?.length !== 0) {
      const res = filteredResults.filter((item) =>
        item.card_type.toLowerCase().includes(selectedOption.toLowerCase())
      );
      setFilteredArray(res);
    } else {
      setFilteredArray(filteredResults);
    }
  }, [selectedOption]);

  return (
    <div>
      <Button variant="outlined" onClick={handleClick}>
        Filter
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => handleOptionSelect("Burner")}>Burner</MenuItem>
        <MenuItem onClick={() => handleOptionSelect("Subscription")}>
          Subscription
        </MenuItem>
        <MenuItem onClick={() => handleOptionSelect("")}>Show All</MenuItem>
      </Menu>
    </div>
  );
};

export default FilterCard;
