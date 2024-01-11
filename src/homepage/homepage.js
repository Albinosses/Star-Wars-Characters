import { Box } from "@mui/material";
import Filters from "./filters/Filters";
import CharacterList from "./characters_list/characterList";

const Home = () => {
  return (
    <Box>
      <Filters />
      <CharacterList />
    </Box>
  );
};

export default Home;
