import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { changeMinMass, changeMaxMass } from "../../state/filtersSlice";

const MassFilter = () => {
  const dispatch = useDispatch();
  const reduxFilters = useSelector((state) => state.filters);

  const [minMass, setMinMass] = useState("");
  const [maxMass, setMaxMass] = useState("");

  useEffect(() => {
    reduxFilters.mass.min == null
      ? setMinMass("")
      : setMinMass(reduxFilters.mass.min);
    reduxFilters.mass.max == null
      ? setMaxMass("")
      : setMaxMass(reduxFilters.mass.max);
  }, [reduxFilters.mass.min, reduxFilters.mass.max]);

  const handleMinMassChange = (event) => {
    setMinMass(event.target.value);
    dispatch(changeMinMass(event.target.value));
  };

  const handleMaxMassChange = (event) => {
    setMaxMass(event.target.value);
    dispatch(changeMaxMass(event.target.value));
  };

  return (
    <Box display="flex" justifyContent="space-between">
      <TextField
        label="Min Mass"
        type="number"
        value={minMass}
        onChange={handleMinMassChange}
        variant="outlined"
        margin="normal"
      />
      <TextField
        label="Max Mass"
        type="number"
        value={maxMass}
        onChange={handleMaxMassChange}
        variant="outlined"
        margin="normal"
      />
    </Box>
  );
};

export default MassFilter;
