import { Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCharacters } from './state/charactersSlice';
import axios from 'axios';
import Home from './homepage/homepage';
import CharacterDetails from './characterDetails/characterDetails';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        const charactersData = response.data.results;

        const getNameFromUrl = async (url) => {
          const response = await axios.get(url);
          return response.data.title || response.data.name;
        };

        const modifiedCharacters = await Promise.all(
          charactersData.map(async (character, index) => {
            const modifiedFilms = await Promise.all(character.films.map(getNameFromUrl));
            const modifiedStarships = await Promise.all(character.starships.map(getNameFromUrl));
            const modifiedSpecies = await Promise.all(character.species.map(getNameFromUrl));

            return {
              ...character,
              id: index + 1,
              films: modifiedFilms,
              starships: modifiedStarships,
              species: modifiedSpecies,
            };
          })
        );

        dispatch(setCharacters(modifiedCharacters))
        console.log("redux updated")
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/characters/:id' Component={CharacterDetails} />
    </Routes>
  );
}

export default App;
