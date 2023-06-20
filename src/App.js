import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SearchCard from "./Components/SearchCard";
import CardComponent from "./Components/CardComponent";
import FilterCard from "./Components/FilterCard";
import InfiniteScroll from "react-infinite-scroller";

const App = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const data = [
    {
      name: "Mixmax",
      budget_name: "Software subscription",
      owner_id: 1,
      spent: {
        value: 100,
        currency: "SGD",
      },
      available_to_spend: {
        value: 1000,
        currency: "SGD",
      },
      card_type: "burner",
      expiry: "9 feb",
      limit: 100,
      status: "active",
    },
    {
      name: "Quickbooks",
      budget_name: "Software subscription",
      owner_id: 2,
      spent: {
        value: 50,
        currency: "SGD",
      },
      available_to_spend: {
        value: 250,
        currency: "SGD",
      },
      card_type: "subscription",
      limit: 10,
      status: "active",
    },
    {
      name: "My Text",
      budget_name: "Software subscription",
      owner_id: 3,
      spent: {
        value: 100,
        currency: "SGD",
      },
      available_to_spend: {
        value: 1000,
        currency: "SGD",
      },
      card_type: "burner",
      expiry: "9 feb",
      limit: 100,
      status: "active",
    },
    {
      name: "My Text Two",
      budget_name: "Software subscription",
      owner_id: 4,
      spent: {
        value: 100,
        currency: "SGD",
      },
      available_to_spend: {
        value: 1000,
        currency: "SGD",
      },
      card_type: "burner",
      expiry: "9 feb",
      limit: 100,
      status: "active",
    },
    {
      name: "Mixmax For",
      budget_name: "Software subscription",
      owner_id: 5,
      spent: {
        value: 100,
        currency: "SGD",
      },
      available_to_spend: {
        value: 1000,
        currency: "SGD",
      },
      card_type: "subscription",
      expiry: "9 feb",
      limit: 100,
      status: "active",
    },
    {
      name: "Mixmax Three",
      budget_name: "Software subscription",
      owner_id: 6,
      spent: {
        value: 100,
        currency: "SGD",
      },
      available_to_spend: {
        value: 1000,
        currency: "SGD",
      },
      card_type: "burner",
      expiry: "9 feb",
      limit: 100,
      status: "active",
    },
    {
      name: "Mixmax Four",
      budget_name: "Software subscription",
      owner_id: 7,
      spent: {
        value: 100,
        currency: "SGD",
      },
      available_to_spend: {
        value: 1000,
        currency: "SGD",
      },
      card_type: "burner",
      expiry: "9 feb",
      limit: 100,
      status: "active",
    },
    {
      name: "Mixmax Five",
      budget_name: "Software subscription",
      owner_id: 8,
      spent: {
        value: 100,
        currency: "SGD",
      },
      available_to_spend: {
        value: 1000,
        currency: "SGD",
      },
      card_type: "subscription",
      expiry: "9 feb",
      limit: 100,
      status: "active",
    },
    {
      name: "Not Mine",
      budget_name: "Software subscription",

      spent: {
        value: 100,
        currency: "SGD",
      },
      available_to_spend: {
        value: 1000,
        currency: "SGD",
      },
      card_type: "burner",
      expiry: "9 feb",
      limit: 100,
      status: "active",
    },
    {
      name: "No Owner Id",
      budget_name: "Software subscription",

      spent: {
        value: 100,
        currency: "SGD",
      },
      available_to_spend: {
        value: 1000,
        currency: "SGD",
      },
      card_type: "subscription",
      expiry: "9 feb",
      limit: 100,
      status: "active",
    },
  ];

  const [FilteredArray, setFilteredArray] = useState(data);

  useEffect(() => {
    if (value === 0) {
      const filteredResults = data.filter((item) =>
        item.hasOwnProperty("owner_id")
      );
      setFilteredArray(filteredResults);
    } else {
      setFilteredArray(data);
    }
  }, [value]);

  let startIndex = 0;
  const chunkSize = 10;

  function fetchNextChunk() {
    const endIndex = startIndex + chunkSize;
    const chunk = data.slice(startIndex, endIndex);
    startIndex = endIndex;

    return chunk;
  }

  return (
    <Box>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Your" />
            <Tab label="All" />
            <Tab label="Blocked" />
          </Tabs>
        </Box>
      </Box>

      <Box
        style={{
          display: "flex",
          marginBottom: "8px",
          justifyContent: "flex-end",
          gap: "8px",
          marginTop: "8px",
        }}
      >
        <SearchCard
          value={value}
          data={data}
          FilteredArray={FilteredArray}
          setFilteredArray={setFilteredArray}
        />
        <FilterCard
          value={value}
          data={data}
          FilteredArray={FilteredArray}
          setFilteredArray={setFilteredArray}
        />
      </Box>

      <InfiniteScroll pageStart={0} hasMore={true} loadMore={fetchNextChunk}>
        <Box
          style={{
            display: "flex",
            gap: "12px",
            alighItems: "center",
            flexWrap: "wrap",
          }}
        >
          {FilteredArray.map((el) => {
            return (
              <CardComponent
                cardTitle={el?.name}
                cardSubtitle={el?.budget_name}
                spend={el?.spent?.value}
                avaialable={el?.available_to_spend?.value}
                cardType={el?.card_type}
                expiry={el?.expiry}
                limit={el?.limit}
              />
            );
          })}
        </Box>
      </InfiniteScroll>
    </Box>
  );
};

export default App;
