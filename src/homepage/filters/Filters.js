import { Button, TextField } from "@mui/material";
import GenderSelector from "./GenderSelector";
import MassFilter from "./MassFilter";
import MovieSelector from "./MovieCheckList";
import Masonry from "@mui/lab/Masonry";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeName, clearFilters } from "../../state/filtersSlice";

const outerSpaceStyle = {
  margin: "20px",
};

const Filters = () => {
  const dispatch = useDispatch();
  const reduxFilters = useSelector((state) => state.filters);

  const [localFilters, setLocalFilters] = useState(reduxFilters);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    setLocalFilters(reduxFilters);
  }, [reduxFilters]);

  const handleSearchNameChanged = (e) => {
    setSearchName(e.target.value);
    dispatch(changeName(e.target.value));
  };

  const handleClear = () => {
    console.log(reduxFilters);

    dispatch(clearFilters());
    setSearchName("");
  };

  return (
    <div style={outerSpaceStyle}>
      <Masonry columns={3} spacing={2}>
        <MovieSelector key={1} />
        <TextField
          key={2}
          onChange={handleSearchNameChanged}
          value={searchName}
          label="Character name"
          variant="outlined"
        />
        <GenderSelector key={3} />
        <MassFilter key={4} />
        <Button key={5} onClick={handleClear} variant="contained">
          Clear
        </Button>
      </Masonry>
    </div>
  );
};

export default Filters;
