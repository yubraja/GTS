import React from 'react';
import { Box } from '@mui/material';
import Header from '../../components/Header';
import StatBox from '../../components/StatBox';
import { useTheme } from '@emotion/react';
import { tokens } from '../../theme';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import Data from './data'; // Adjust the import path as needed

const Dustbin = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px" sx={{ flexGrow: 1 }}>
      <Header title="Dustbin Live Details" subtitle="This is the live condition of the dustbins that are around the city!" />
      <Box height="auto">

        {/* GRID & CHARTS */}
        <Box
          display="grid"
          gridTemplateColumns={{
            xs: '1fr',
            sm: '1fr 1fr',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          }}
          gap="1rem"
          xs={12}
        >
          {/* ROW 1 */}
          <Box
            gridColumn="span 12"
            sm={{ gridColumn: 'span 6' }}
            md={{ gridColumn: 'span 4' }}
            lg={{ gridColumn: 'span 3' }}
            backgroundColor={colors.blueAccent[700]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="Balkumari"
              subtitle="+37%"
              progress="0.37"
              increase="Rising"
              icon={
                <TakeoutDiningIcon
                  sx={{ color: colors.redAccent[300], fontSize: '4rem' }}
                />
              }
            />
          </Box>
          {/* Add more similar boxes for other locations as needed */}
        </Box>

        {/* Render the Data component */}
        <Data />

      </Box>
    </Box>
  );
};

export default Dustbin;
