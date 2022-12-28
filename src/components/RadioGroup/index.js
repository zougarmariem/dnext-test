// Dependencies
import React, { useState, useEffect } from "react";

// UI Dependencies
import Radio from "@mui/material/Radio";
import NativeRadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const RadioGroup = ({ disabled, onChange, init }) => {
  // State
  const [value, setValue] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  useEffect(() => {
    if (init) {
      setValue(null);
    }
  }, [init]);

  return (
    <FormControl disabled={disabled}>
      <FormLabel id="demo-controlled-radio-buttons-group">Group by</FormLabel>
      <NativeRadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="code" control={<Radio />} label="Code" />
        <FormControlLabel value="month" control={<Radio />} label="Month" />
        <FormControlLabel value="year" control={<Radio />} label="Year" />
      </NativeRadioGroup>
    </FormControl>
  );
};

export default RadioGroup;
