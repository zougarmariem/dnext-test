// dependencies
import React, { useState, useEffect } from "react";

// UI dependencies
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import NativeRadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

// UI local dependencies
import RadioGroup from "../RadioGroup";

// Hooks
import { useFile } from "../../hooks/useFile";
import { useExerciceContext } from "../../hooks/useExerciceContext";

// Style
import "./style.scss";

const Sider = () => {
  const { dispatch } = useExerciceContext();
  const { setDataFile, loading } = useFile();
  const [code, setCode] = useState("");
  const [id, setId] = useState("");
  const [init, setInit] = useState(null);
  const [isFilterByText, setIsFilterByText] = useState(true);
  const [filterType, setFilterType] = useState("filterByText");

  const handleChangeRadio = (value) => {
    setInit(false);
    if (value === "code") {
      dispatch({
        type: "GROUP_BY_CODE",
      });
    }
    if (value === "year") {
      dispatch({
        type: "GROUP_BY_YEAR",
      });
    }
    if (value === "month") {
      dispatch({
        type: "GROUP_BY_MONTH",
      });
    }
  };

  const handleChangeFilter = (event) => {
    switch (event.target.value) {
      case "filterByText":
        setIsFilterByText(true);
        setFilterType("filterByText");
        setInit(true);
        break;
      default:
        setIsFilterByText(false);
        setFilterType("filterByRadio");
        break;
    }
  };

  useEffect(() => {
    setDataFile(true);
    setId("");
    setCode("");
  }, [isFilterByText, setDataFile]);

  return (
    <div className="sider">
      <h2>Filters</h2>
      <br />
      <FormControl disabled={loading}>
        <FormLabel id="demo-controlled-radio-buttons-group">
          Filter type
        </FormLabel>
        <NativeRadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group2"
          onChange={handleChangeFilter}
          value={filterType}
        >
          <FormControlLabel
            value="filterByText"
            control={<Radio />}
            label="Filter by text"
          />
          <FormControlLabel
            value="filterByRadio"
            control={<Radio />}
            label="Filter by radio"
          />
        </NativeRadioGroup>
      </FormControl>
      <br />
      <TextField
        onChange={(event) => setCode(event.target.value)}
        id="inputCode"
        value={code}
        label="Code"
        disabled={!isFilterByText}
      />
      <br />
      <Button
        onClick={() => {
          dispatch({
            type: "FILTER_BY_CODE",
            code,
          });
        }}
        variant="contained"
        disabled={!isFilterByText}
      >
        Search by code
      </Button>
      <br />
      <TextField
        onChange={(event) => setId(event.target.value)}
        id="inputId"
        label="Id"
        value={id}
        disabled={!isFilterByText}
      />
      <br />
      <Button
        onClick={() => {
          dispatch({
            type: "FILTER_BY_ID",
            id,
          });
        }}
        variant="contained"
        disabled={!isFilterByText}
      >
        Search by id
      </Button>
      <br />
      <RadioGroup
        disabled={isFilterByText}
        init={init}
        onChange={handleChangeRadio}
      />
    </div>
  );
};

export default Sider;
