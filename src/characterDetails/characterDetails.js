import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Typography, List, ListItem, ListItemText, Paper } from "@mui/material";

const paperStyle = {
  padding: "20px",
  marginTop: "20px",
  maxWidth: "600px",
  margin: "auto",
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const headingStyle = {
  marginBottom: "16px",
  color: "#1976D2",
};

const listItemStyle = {
  backgroundColor: "white",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  borderRadius: "4px",
  margin: "8px 0",
  transition: "background-color 0.3s, color 0.3s",
  "&:hover": {
    backgroundColor: "#1976D2",
    color: "white",
  },
};

const CharacterDetails = () => {
  const { id } = useParams();
  const character = useSelector((state) => state.characters.find((character) => character.id === parseInt(id)));

  if (!character) {
    console.log(character)
    return <Typography variant="h5">Character not found</Typography>;
  }

  return (
    <Paper style={paperStyle} elevation={3}>
      <Typography variant="h4" style={headingStyle} gutterBottom>
        Character Details for ID: {character.name}
      </Typography>
      <Typography variant="h5" gutterBottom>
        Mass: {character.mass}
      </Typography>
      <Typography variant="h5" gutterBottom>
        Height: {character.height}
      </Typography>
      <Typography variant="h5" gutterBottom>
        Birth Year: {character.birth_year}
      </Typography>
      <Typography variant="h5" gutterBottom>
        Gender: {character.gender}
      </Typography>

      {character.species && character.species.length > 0 && (
        <Typography variant="h5" gutterBottom>
          Species: {character.species}
        </Typography>
      )}

      {character.films && character.films.length > 0 && (
        <>
          <Typography variant="subtitle1" gutterBottom>
            Movies:
          </Typography>
          <List>
            {character.films.map((movie, index) => (
              <ListItem key={index} style={listItemStyle}>
                <ListItemText primary={movie} />
              </ListItem>
            ))}
          </List>
        </>
      )}

      {character.starships && character.starships.length > 0 && (
        <>
          <Typography variant="subtitle1" gutterBottom>
            Spaceships:
          </Typography>
          <List>
            {character.starships.map((spaceship, index) => (
              <ListItem key={index} style={listItemStyle}>
                <ListItemText primary={spaceship} />
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Paper>
  );
};

export default CharacterDetails;
