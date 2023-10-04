// import axios from "axios";
// import { mockDataTeam } from "./mockData";

// // Define the function to fetch user data
// const fetchDriverData = async () => {
//   try {
//     const response = await axios.get(
//       "http://localhost:5000/driverVerification/listout",
//       { withCredentials: true }
//     );

//      console.log(response)
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//     throw error; // You can handle errors as needed
//   }
// };

// export default fetchDriverData; // Export the fetchUserData function


export const mockData = [
  {
    id: 1,
    role: "Driver",
    email: "arjun@bhandari.com",
    name: "Arjun Bhandari",
    number: "(665)121-5454",
    access: "admin",
  }
];