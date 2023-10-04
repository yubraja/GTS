import { Box, Button, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockDataDriver";
import Header from "../../components/Header";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Team = () => {
  const navigate = useNavigate();

  // api call for isActalDeiver verification
  const response = async () => {
    await axios.get(
      "http://localhost:5000/driverVerification/listout",
      { withCredentials: true }
    );
  }; // <--- Added a closing parenthesis here

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Full Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "role",
      headerName: "Role",
      type: "string",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "number",
      headerName: "License No",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Verify Driver",
      flex: 1,
      renderCell: () => {
        const AcceptUser = async () => {
          // arko api call garera isaActualDriver true garne ko yeha
        };

        const DeleteUser = async () => {
          // arko api call garera isaActualDriver false vako lai delete garne DB bata
        };

        return (
          <>
            <Box>
              <Button variant="outlined" color="error" onClick={DeleteUser}>
                Reject
              </Button>
              <Button variant="contained" color="success" onClick={AcceptUser}>
                Accept
              </Button>
            </Box>
          </>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Actual Driver Verification Page"
        subtitle="Verify Driver On the basis of the License No"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
