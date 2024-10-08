import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos?.length) return "Loading...";
  
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography fontSize="2rem" mb="33px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0px" } }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            className="exercise-video"
            target="blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography fontSize="1.5rem" color="#000" fontFamily="fantasy">
                  {item.video.title}
              </Typography>
              <Typography variant="h6" color="#b30000">
                  {`-${item.video.channelName}`}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
