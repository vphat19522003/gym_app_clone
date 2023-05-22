import React, { useEffect, useState } from "react";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import { Box } from "@mui/material";
import { Detail, ExerciseVideos, SimilarExercises } from "../components";
import { useParams } from "react-router-dom";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";
      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);
    };
    fetchExerciseData();
  }, [id]);
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
