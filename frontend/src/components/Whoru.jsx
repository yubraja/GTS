import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();


export default function Whoru() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        margin: "75px",
        padding: "23px",
      }}
    >
      <ThemeProvider theme={defaultTheme}>




        <div className="dov">hell owlrld </div>
    
      </ThemeProvider>
    </Box>
  );
}
