import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import axios from "axios";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleSubmit = async (event) => {
    event.preventDefault();


    // let userName;
      const response = await axios.get(
        "http://localhost:5000/user/details",
      );
      console.log(response)
      // userName = response.data.firstName;
      // console.log(userName)
      // return userName;
    };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Hello User!" subtitle="Welcome to your dashboard" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {handleSubmit}
          <StatBox
            title="12"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431"
            subtitle="Visit this site"
            progress="0.30"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        
      </Box>
    </Box>
  );
};

export default Dashboard;
