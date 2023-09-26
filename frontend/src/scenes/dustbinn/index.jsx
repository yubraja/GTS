// import { Box } from "@mui/material";
// import Header from "../../components/Header";
// import StatBox from "../../components/StatBox";
// import { useTheme } from "@emotion/react";
// import { tokens } from "../../theme";
// import EmailIcon from "@mui/icons-material/Email";
// import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import TrafficIcon from "@mui/icons-material/Traffic";
// import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';


// const Dustbin = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   return (
//     <Box m="20px" sx={{ flexGrow: 1 }}>
//       <Header title="Dustbin Live Details" subtitle="This is the live condition of the dustbins that are around the city!" />
//       <Box height="75vh">


//           {/* GRID & CHARTS */}
//       <Box
//         display="grid"
//         gridTemplateColumns="repeat(12, 1fr)"
//         gridAutoRows="20rem"
//         gap="1rem"
//         xs={12}
//       >
//         {/* ROW 1 */}
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.blueAccent[700]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             title="Balkumari"
//             subtitle="+37%"
//             progress="0.37"
//             increase="Rising"
//             icon={
//               <TakeoutDiningIcon
//                 sx={{ color: colors.redAccent[300], fontSize: "4rem" }}
//               />
//             }
//           />
//         </Box>
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.blueAccent[700]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             title="Koteswor"
//             subtitle="+21%"
//             progress="0.21"
//             increase="Rising"
//             icon={
//               <TakeoutDiningIcon
//                 sx={{ color: colors.redAccent[200], fontSize: "4rem" }}
//               />
//             }
//           />
//         </Box>
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.blueAccent[700]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             title="Baneswor"
//             subtitle="+5%"
//             progress="0.05"
//             increase="Rising"
//             icon={
//               <TakeoutDiningIcon
//                 sx={{ color: colors.grey[100], fontSize: "4rem" }}
//               />
//             }
//           />
//         </Box>
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.blueAccent[700]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             title="Tinkune"
//             subtitle="+57%"
//             progress="0.57"
//             increase="Rising"
//             icon={
//               <TakeoutDiningIcon
//                 sx={{ color: colors.redAccent[500], fontSize: "4rem" }}
//               />
//             }
//           />
//         </Box>
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.blueAccent[700]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             title="Gwarko"
//             subtitle="+73%"
//             progress="0.73"
//             increase="Rising"
//             icon={
//               <TakeoutDiningIcon
//                 sx={{ color: colors.redAccent[500], fontSize: "4rem" }}
//               />
//             }
//           />
//         </Box>
//         <Box
//           gridColumn="span 3"
//           backgroundColor={colors.blueAccent[700]}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <StatBox
//             title="Satdobato"
//             subtitle="+43%"
//             progress="0.43"
//             increase="Rising"
//             icon={
//               <TakeoutDiningIcon
//                 sx={{ color: colors.redAccent[400], fontSize: "4rem" }}
//               />
//             }
//           />
//         </Box>
        
//       </Box>
      
//       </Box>
//     </Box>
//   );
// };

// export default Dustbin;
import React from 'react';
import { Box } from '@mui/material';
import Header from '../../components/Header';
import StatBox from '../../components/StatBox';
import { useTheme } from '@emotion/react';
import { tokens } from '../../theme';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';

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
              title="Putalisadak"
              subtitle="+457%"
              progress="0.45"
              increase="Rising"
              icon={
                <TakeoutDiningIcon
                  sx={{ color: colors.redAccent[300], fontSize: '4rem' }}
                />
              }
            />
          </Box>
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
              title="Gwarko"
              subtitle="+97%"
              progress="0.97"
              increase="Rising"
              icon={
                <TakeoutDiningIcon
                  sx={{ color: colors.redAccent[500], fontSize: '4rem' }}
                />
              }
            />
          </Box>
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
              title="Koteswor"
              subtitle="+7%"
              progress="0.07"
              increase="Rising"
              icon={
                <TakeoutDiningIcon
                  sx={{ color: colors.redAccent[100], fontSize: '4rem' }}
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
