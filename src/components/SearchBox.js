import { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = ({ placeholder, handleInput }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (value) => {
    setInputValue(value);
  };

  handleInput(inputValue);

  return (
    <Paper
      //component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: 40,
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          fontSize: 14,
          fontWeight: "400",
          fontStyle: "italic",
        }}
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
      />
      <SearchIcon />
    </Paper>
  );
};

export default SearchBox;
