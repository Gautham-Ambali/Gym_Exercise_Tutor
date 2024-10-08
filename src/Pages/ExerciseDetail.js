import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData ,exerciseOptions,youtubeOptions} from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'


const ExerciseDetail = () => {
  const [exerciseDetail,setExerciseDetail]=useState({})
  const {id}=useParams();
  const[exerciseVideos,setExerciseVideos]=useState([])
  const [targetMuscleExercises,setTargetMuscleExercises]=useState([])
  const [equipmentMuscleExercises,setEquipmentMuscleExercises]=useState([])

  useEffect(()=>{
    const fetchExercisesData=async () =>{
      const exerciseDbUrl="https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl="https://youtube-search-and-download.p.rapidapi.com";
      const exerciseDetailData=await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions)
      console.log(exerciseDetailData.name);
      setExerciseDetail(exerciseDetailData )

      const exerciseVideosData= await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions)
      setExerciseVideos(exerciseVideosData.contents)
      console.log(exerciseVideos);

      const targetMuscleExercisesData= await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions)
      setTargetMuscleExercises(targetMuscleExercisesData)
      const equipmentMuscleExercisesData= await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions)
      setEquipmentMuscleExercises(equipmentMuscleExercisesData)
    }
    fetchExercisesData();
  },[id])
  
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentMuscleExercises={equipmentMuscleExercises}/>
    </Box>
  )
}

export default ExerciseDetail