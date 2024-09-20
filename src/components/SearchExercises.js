import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";


const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
  const [search, setSearch] = useState("");
 
  const [bodyParts,setBodyParts]=useState([])

  useEffect(()=>{
    const fetchExercisesData=async ()=>{
      const bodyPartsData= await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList",exerciseOptions);
      setBodyParts(["all",...bodyPartsData])
    }
    fetchExercisesData();
  },[])

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=0&offset=0",
        exerciseOptions
      );
      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );
      setSearch("")
      setExercises(searchedExercises)
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      

    }
  };

  function handleKeyDown(e){
    if(e.key==="Enter"){
      handleSearch();
    }
  }
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", sm: "30px" } }}
        mb="50px"
        textAlign="center"
        fontFamily="monospace"
      >
        Get Ready To Plan <br /> Your Workout
      </Typography>
      <Box position="relatve" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "white",
            borderRadius: "40px",
            
          }}
          height="76px"
          value={search}
          placeholder="Search Exercises"
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          type="text"
          onKeyDown={handleKeyDown}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            ml:"10px"
          }}
          
          onClick={handleSearch}
          
        >
          Search
        </Button>
      </Box>
      <Box sx={{position:"relative",width:"100%",p:"20px"}}>
          <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
