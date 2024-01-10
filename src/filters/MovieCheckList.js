import React, { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import { changeMovies } from '../state/filters/filtersSlice'

const MovieChecklist = () => {
  const dispatch = useDispatch();
  const reduxFilters = useSelector((state) => state.filters);

  const [selectedMovies, setSelectedMovies] = useState([]);

  useEffect(() => {
    setSelectedMovies(reduxFilters.movies || []);
  }, [reduxFilters.movies]);

  const handleMovieChange = (movie) => {
    const updatedMovies = selectedMovies.includes(movie)
      ? selectedMovies.filter((selectedMovie) => selectedMovie !== movie)
      : [...selectedMovies, movie];

    setSelectedMovies(updatedMovies);
    
    dispatch(changeMovies(updatedMovies))
  };

  const movies = ["A New Hope", "The Empire Strikes Back", "Return of the Jedi", 
        "The Phantom Menace", "Attack of the Clones", "Revenge of the Sith"];

  return (
    <Box display="flex" justifyContent="center">
      <FormControl component="fieldset">
        <FormLabel component="legend">Select Movies</FormLabel>
        <FormGroup>
          {movies.map((item, index) => (
          <FormControlLabel key={index}
            control={<Checkbox checked={selectedMovies.includes(item)} onChange={() => handleMovieChange(item)} />}
            label= {item}
          />
        ))}
        </FormGroup>
      </FormControl>
    </Box>
    
  );
};

export default MovieChecklist;
