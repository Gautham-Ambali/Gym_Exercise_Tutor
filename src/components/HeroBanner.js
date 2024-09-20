import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Bo from "../assets/images/bo.png"


const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#c50000" fontWeight="600" fontSize="46px" lineHeight="1.1">
       <span style={{ fontSize:"20px",}}>
       WELCOME TO 
        </span><br/>FITNESS
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" },textShadow:" -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}
        mb="13px"
        mt="20px"
        color="white"
        
      >
        Eat. Sleep.
        <br /> <span style={{color:"yellow",textShadow:" -1px -1px 0 #000, 1px -1px 0 #000, -1px 4px 0 #000, 1px 1px 0 #000"}}>Train.</span> Repeat.
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={2}>
        Check out the most effective exercises
      </Typography>
      <Button variant="contained" color="error" href="#exercises" sx={{backgroundColor:"#c50000",padding:"10px"}}>
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        fontSize="200px"
        color="black"
        sx={{ opacity: "0.2", display: { lg: "block", xs: "none" } }}
      >
        Transform
      </Typography>
      <img
     
        src={Bo}
        alt="banner"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
