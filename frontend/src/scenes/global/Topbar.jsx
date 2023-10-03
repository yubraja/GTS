import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from '@mui/icons-material/Logout';
import axios from "axios";
import { toast } from "react-toastify";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const backtohome=async ()=>{
    window.location.href = "/";
      axios.get(
      "http://localhost:5000/logout",{
        withCredentials:true
      }
     )
    }
  //   if(backtohome.data.msg.includes("success")){
  //     toast.success(backtohome.data.msg, {
  //       position: toast.POSITION.TOP_CENTER,
  //       autoClose: 3000,
  //     })}
  //     else{
  //       toast.error(backtohome.data.msg, {
  //         position: toast.POSITION.TOP_CENTER,
  //         autoClose: 3000,
  //       });}
  // console.log(backtohome)

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton onClick={backtohome} >
          <LogoutIcon/>
            Logout
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
