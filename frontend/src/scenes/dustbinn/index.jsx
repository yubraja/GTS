import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
import { useEffect, useState } from "react";
import { getDistanceValue } from "./getDatabase";

const Dustbin = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [distance, setDistance] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const distanceValue = await getDistanceValue();
        setDistance(distanceValue);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchData();
  }, []);

  const total = 27;
  const spaceUsed = total - distance;
  let color = colors.redAccent[100];
  let percentageCovered =
    parseInt((spaceUsed / total) * 100) > 100
      ? 100
      : parseInt((spaceUsed / total) * 100);
  if (distance > 1100) {
    percentageCovered = 100;
  }
  if (percentageCovered < 50) {
    color = colors.greenAccent[500];
  } else if (percentageCovered < 80) {
    color = colors.redAccent[300];
  } else {
    color = colors.redAccent[500];
  }

  return (
    <Box m="20px" sx={{ flexGrow: 1 }}>
      <Header
        title="Dustbin Live Details"
        subtitle="This is the live condition of the dustbins that are around the city!"
      />
      <Box height="auto">
        {/* GRID & CHARTS */}
        <Box
          display="grid"
          gridTemplateColumns={{
            xs: "1fr",
            sm: "1fr 1fr",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap="1rem"
          xs={12}
        >
          {/* ROW 1 */}
          <Box
            gridColumn="span 12"
            sm={{ gridColumn: "span 6" }}
            md={{ gridColumn: "span 4" }}
            lg={{ gridColumn: "span 3" }}
            backgroundColor={colors.blueAccent[700]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              subtitle="Balkumari"
              title={
                percentageCovered < 0
                  ? `Please Close Dustbin`
                  : percentageCovered > 100
                  ? 100 + `%`
                  : percentageCovered+`%`
              }
              progress="0.37"
              increase={`Space Available= ${distance}CM ${
                distance > total ? "(Dustbin Open Up)" : ""
              }`}
              icon={
                <TakeoutDiningIcon
                  sx={{ color: { color }, fontSize: "4rem" }}
                />
              }
            />
          </Box>
          {/* Add more similar boxes for other locations as needed */}
        </Box>
      </Box>
    </Box>
  );
};

export default Dustbin;
