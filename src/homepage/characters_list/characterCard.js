import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";

const cardStyle = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  textDecoration: "none",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.05)",
  },
};

const contentStyle = {
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const linkStyle = {
  textDecoration: "none",
};

const CharacterCard = ({ name, id }) => {
  return (
    <Card style={cardStyle} component={Link} to={`/characters/${id}`} className="character-card-link">
      <CardContent style={contentStyle}>
        <Typography variant="h6" color="primary" align="center">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
