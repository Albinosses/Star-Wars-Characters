import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import CharacterCard from "./characterCard";
import Typography from "@mui/material/Typography";

const outerSpaceStyle = {
  margin: "20px",
};

const CharacterList = () => {
  const reduxCharacters = useSelector((state) => state.characters);
  const filters = useSelector((state) => state.filters);
  const [characters, setCharacters] = useState(reduxCharacters);

  const applyFilters = (characters) => {
    const { movies, name, gender, mass } = filters;

    console.log(characters);

    return characters.filter((character) => {
      if (movies && !movies.every((movie) => character.films.includes(movie))) {
        return false;
      }

      if (
        name &&
        character.name.toLowerCase().indexOf(name.toLowerCase()) === -1
      ) {
        return false;
      }

      if (gender && character.gender !== gender) {
        return false;
      }

      if (mass.min && character.mass < mass.min) {
        return false;
      }
      if (mass.max && character.mass > mass.max) {
        return false;
      }

      return true;
    });
  };

  useEffect(() => {
    const filteredCharacters = applyFilters(reduxCharacters);
    setCharacters(filteredCharacters);
  }, [reduxCharacters, filters]);

  return (
    <div style={outerSpaceStyle}>
      {characters.length === 0 ? (
        <Typography variant="h6" align="center">
          Loading...
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {characters.map((character, index) => (
            <Grid item xs={4} key={index}>
              <CharacterCard name={character.name} id={character.id} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default CharacterList;
