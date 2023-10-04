//api call to import all the data of driver which are not verified as a actual driver

import axios from "axios";


// const navigate = useNavigate();

// // Custom function to display toasts
// const showToast = (message, isError = false) => {
//   toast[isError ? "error" : "success"](message, {
//     position: toast.POSITION.TOP_CENTER,
//     autoClose: 3000,
//   });
// };

// // api call for isActalDeiver verification
// const response = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:5000/driverVerification/listout",
//         { withCredentials: true }
//       );

//       if (response.data.msg) {

//         showToast(response.data.msg); // Display success toast
        
    
//     } else {
//         showToast(response.data.msg, true); // Display error toast
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       showToast("An error occurred during login", true); // Display error toast for network errors or other issues
//       // Optionally, provide more specific error messages based on error types
//     }


// ------------------------------------------------------------------------------------

// api call for isActualDriver verification
const UnverifiedDriver = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/driverVerification/listout",
      { withCredentials: true }
      );
      return response
      console.log(response)
  } catch (error) {
    console.error("Login error:", error);
  }
};


// check garna baki xa yesle k output diraxa
// const id=UnverifiedDriver.data.id;
// const role=UnverifiedDriver.data.role;
// const name=UnverifiedDriver.data.name;
// const email=UnverifiedDriver.data.email;
// const number=UnverifiedDriver.data.number;
// const verified=UnverifiedDriver.data.verified;
// const isActualDriver=UnverifiedDriver.data.isActualDriver;




export const mockDataTeam = [
  {
    id: "id",
    role: "role",
    name: "name",
    email: "email",
    number: "number",
    verified: "verified",
    isActualDriver: "isActualDriver",
  },
];
