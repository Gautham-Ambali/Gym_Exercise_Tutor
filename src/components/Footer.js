import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Logo5 from "../assets/images/Logo5.png"
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="0px" alignItems="center" px="40px" pt="24px">
        <img src={Logo5} alt="logo" width="50px" height="50px"/>
        <Typography  pb="40px" mt="20px">
          Made by Gautham

        </Typography>

      </Stack>
    </Box>
  )
}

export default Footer