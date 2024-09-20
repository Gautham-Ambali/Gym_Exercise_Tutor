import { Stack, Typography } from "@mui/material";
import React from "react";

import { imageSources } from "../utils/ImageData";

const BodyPart = ({ item, bodyPart, setBodyPart, source }) => {
  return (
    <Stack
      
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        gap: "47px",
        cursor:"pointer"
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={imageSources.filter((item) => source.includes(item.part))[0]?.src}
        alt="dumbbell"
        style={{ width: "70px", height: "70px" }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
