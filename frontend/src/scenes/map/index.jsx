// // export default Map;
// import React, { useEffect, useState } from "react";
// import L from "leaflet";
// import axios from "axios";

// import "leaflet/dist/leaflet.css";

// const Map =  () => {
//   const [userData,setUserData]=useState({})

//   const map = L.map("map").setView([0.6716736, 85.331841], 13);

//   L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//     maxZoom: 19,
//     attribution:
//       '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//   }).addTo(map);

//   let marker, circle, zoomed;
//   const ipDriver = "134.201.250.155";
//   useEffect(() => {

//     const fetchDataFromServer = async (req, res) => {
//       // Your fetch logic here
//       // access userdetails form session
//       const userid = req.session.user._id;

//       const response = await axios(
//         "http://localhost:5000/userDetail",
//         { withCredentials: true },
//         userid
//       );
//       if(response)
//       setUserData(response.data)
//     }
//   });


//   const checkVehiclesAround = (user_latlng, driver_latlng) => {
//     const distance = user_latlng.distanceTo(driver_latlng);
//     return distance < 500;
//   };

//   const sendEmailToServer = (userEmail) => {
//     const emailData = {
//       email: userEmail,
//       // Add any other data you want to send to the server
//     };

//     fetch("127.0.0.1:8000/sendEmailtoUser", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(emailData),
//     })
//       .then((response) => {
//         if (response.ok) {
//           console.log("Email sent to server successfully");
//         } else {
//           console.error("Failed to send email to server");
//         }
//       })
//       .catch((error) => {
//         console.error("Error sending email:", error);
//       });



//   const success = (pos) => {


//       const driver_lat = 27.67142;
//       const driver_lng = 85.3398;

//       // Use user_lat, user_lng, driver_lat, driver_lng as needed

//       if (!zoomed) {
//         zoomed = map.fitBounds(circle.getBounds());
//       }

//       // Add marker, circle, and other map elements as needed
//     };

//     const error = (err) => {
//       if (err.code === 1) {
//         alert("Please provide geolocation access!!");
//       } else {
//         alert("Cannot get current location");
//       }
//     };


//     };

//     navigator.geolocation.watchPosition(success, error);

//     userData.then((dataOfUser) => {
//       if (dataOfUser.role === "citizen") {
//         // Handle citizen role
//         const user_lat = dataOfUser.latitude;
//         const user_lng = dataOfUser.longitude;
//         // Need data from the database for both user and driver

//         // But for now no need for driver location since we give that using the IP address

//         // We need to get user's who are using the app, it's data of user_lat, user_lng, etc.

//         // If condition either it is a driver or a user

//         circle = L.circle([user_lat, user_lng], { radius: accuracy }).addTo(
//           map
//         );

//         if (!zoomed) {
//           zoomed = map.fitBounds(circle.getBounds());
//         }

//         map.setView([user_lat, user_lng]);

//         var userIcon = L.icon({
//           iconUrl: "user.png",
//           iconSize: [38, 38],
//           iconAnchor: [22, 94],
//           popupAnchor: [-3, -76],
//         });

//         marker = L.marker([user_lat, user_lng], { icon: userIcon }).addTo(map);

//         var driverIcon = L.icon({
//           iconUrl: "garbage_truck.png",
//           iconSize: [38, 50],
//           iconAnchor: [22, 94],
//           popupAnchor: [-3, -76],
//         });

//         driverMark = L.marker([driver_lat, driver_lng], {
//           icon: driverIcon,
//         }).addTo(map);
//       }

//       // Check each
//       if (dataOfUser.role === "driver") {
//         // For now, to show using mobile, we are not doing this thing
//         // const driver_lat = pos.coords.latitude;
//         // const driver_lng = pos.coords.longitude;

//         // For each driver_lat and driver_long, update to the database
//         driver_latlng = L.latLng(driver_lat, driver_lng);
//         user_latlng = L.latLng(user_lat, user_lng);

//         // If condition either it is a driver or a user

//         circle = L.circle([user_lat, user_lng], { radius: accuracy }).addTo(
//           map
//         );

//         if (!zoomed) {
//           zoomed = map.fitBounds(circle.getBounds());
//         }

//         map.setView([driver_lat, driver_lng]);

//         var driverIcon = L.icon({
//           iconUrl: "garbage_truck.png",
//           iconSize: [38, 50],
//           iconAnchor: [22, 94],
//           popupAnchor: [-3, -76],
//         });

//         marker2 = L.marker([driver_lat, driver_lng], {
//           icon: driverIcon,
//         }).addTo(map);

//         // All user data from the database

//         // Use loop
//         const data = fetchDataFromServer();

//         for (let val of data.list) {
//           if (val.role === "user") {
//             const user_email = val.email;
//             const vehiclesAround = checkVehiclesAround(
//               user_latlng,
//               driver_latlng
//             );

//             if (vehiclesAround) {
//               sendEmailToServer(user_email);
//             }
//           }
//         }
//       }

//       if (marker) {
//         map.removeLayer(marker);
//         map.removeLayer(circle);
//       }
//     });

//     return () => {
//       if (marker) {
//         map.removeLayer(marker);
//         map.removeLayer(circle);
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Map User Location</h1>
//       <div id="map" className="map-container"></div>
//     </div>
//   );
// };

// export default Map;




import React, { useState, useEffect } from 'react';
import { Box } from "@mui/material";
import Header from '../../components/Header';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

import userIconUrl from './user.png';
import driverIconUrl from './truck-solid.svg';
import dustbinIconUrl from './trash-solid.svg';



const Map = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const map = L.map('map');
    map.setView([0.6716736, 85.3318410], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    let userMarker, driverMarker, dustbinMarker, circle, zoomed;


    async function fetchData() {
      try {
        const userData = await axios.get("http://localhost:5000/userDetail", {
          withCredentials: true
        });

        setUser(userData.data.result);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    console.log(user)

    function success(pos) {

      const accuracy = pos.coords.accuracy;
      const driver_lat = 27.67142; // here I have given our current location randomly
      const driver_lng = 85.33980;

      const dustbin_lat = 27.67135; // here I have given our current location randomly
      const dustbin_lng = 85.33950;





      var driver_latlng;
      var user_latlng;
      var distance;



      //create icon for each entity

      const driverIcon = L.icon({
        iconUrl: driverIconUrl,
        iconSize: [25, 25],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
      });

      const userIcon = L.icon({
        iconUrl: userIconUrl, // Make sure you have the 'user.png' image
        iconSize: [38, 38],
        iconAnchor: [19, 38], // Adjust the anchor point as needed
      });


      const dustbinIcon = L.icon({
        iconUrl: dustbinIconUrl,
        iconSize: [25, 25],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
      });
      //dustbin marker is seen by both user 

      dustbinMarker = L.marker([dustbin_lat, dustbin_lng], { icon: dustbinIcon });



      //for citizen role


      if (user.role == 'Citizen') {



        const user_lat = user.latitude;
        const user_lng = user.longitude;





        if (user_lat !== undefined && user_lng !== undefined) {
          if (userMarker) {
            map.removeLayer(userMarker);
            map.removeLayer(circle);
          }

          userMarker = L.marker([user_lat, user_lng], { icon: userIcon });

          driverMarker
            = L.marker([driver_lat, driver_lng], { icon: driverIcon });


          // Wait for the map to be ready before adding the marker
          map.whenReady(function () {
            userMarker.addTo(map);
            driverMarker
              .addTo(map);
            dustbinMarker.addTo(map);
            circle = L.circle([user_lat, user_lng], { radius: accuracy }).addTo(map);

            if (!zoomed) {
              zoomed = map.fitBounds(circle.getBounds());
            }

            map.setView([user_lat, user_lng]);
          });
        }














      }



      //code for driver
      if (user.role == 'Driver') {


        //for now to show using mobile we are not doing this thing
        const driver_lat = pos.coords.latitude;
        const driver_lng = pos.coords.longitude;

        const user_lat = 27.67142;
        const user_lng = 85.33980;

        //for each driver_lat and driver_long update to database




        if (driver_lat !== undefined && driver_lng !== undefined) {
          if (driverMarker) {
            map.removeLayer(driverMarker);
            map.removeLayer(circle);
          }


          driverMarker
            = L.marker([driver_lat, driver_lng], { icon: driverIcon });


          // Wait for the map to be ready before adding the marker
          map.whenReady(function () {
            driverMarker
              .addTo(map);
            dustbinMarker.addTo(map);
            circle = L.circle([driver_lat, driver_lng], { radius: accuracy }).addTo(map);

            if (!zoomed) {
              zoomed = map.fitBounds(circle.getBounds());
            }

            map.setView([driver_lat, driver_lng]);
          });





          driver_latlng = L.latLng(driver_lat, driver_lng);
          console.log(driver_latlng);
          user_latlng = L.latLng(user_lat, user_lng);
          console.log(user_latlng);
          distance = driver_latlng.distanceTo(user_latlng);

          console.log(distance)

          if (distance < 500)
          {



            
            
            }


          // console.log(driver_latlng.distanceTo(user.latlng));


        }









      }

    }

    function error(err) {
      if (err.code === 1) {
        alert('Please provide geolocation access!');
      } else {
        alert('Cannot get current location');
      }
    }

    fetchData();
    navigator.geolocation.watchPosition(success, error);

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <Box m="20px">
        <Header title="LIVE LOCATION" subtitle="Map Is Comming Soon" />
      </Box>
      <h1 style={{ textAlign: 'center' }}>Map User Location</h1>
      <div id="map" style={{ height: '850px' }}></div>
    </div>
  );
};

export default Map;
