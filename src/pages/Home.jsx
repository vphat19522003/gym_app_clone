import React from "react";
import { Box } from "@mui/material";
import { SearchExercises, Exercises, HeroBanner } from "../components";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
