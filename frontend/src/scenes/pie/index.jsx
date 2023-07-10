import React from 'react'
import { Box } from "@mui/material";
import Header from '../../components/Header';
import PieChart from '../../components/PieChart'


export default function Map() {
  return (
    <Box m="20px">
    <Header title="Line Chart" subtitle="Simple Line Chart" />
    <Box height="75vh">
      <PieChart />
    </Box>
  </Box>
  )
}

