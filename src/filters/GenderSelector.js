import React, { useState, useEffect } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import { changeGender } from '../state/filters/filtersSlice'

const GenderSelector = () => {
  const dispatch = useDispatch();
  const reduxFilters = useSelector((state) => state.filters);

  const [selectedGender, setSelectedGender] = useState('');

  useEffect(() => {
    setSelectedGender(reduxFilters.gender);
  }, [reduxFilters.gender]);

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
    dispatch(changeGender(event.target.value))
  };

  return (
    <Box display="flex" justifyContent="center">
        <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup
        row
        aria-label="gender"
        name="gender"
        value={selectedGender}
        onChange={handleGenderChange}
      >
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    </Box>
    
  );
};

export default GenderSelector;
