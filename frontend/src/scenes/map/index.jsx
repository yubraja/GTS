





import React, { useState, useEffect } from 'react';
import { Box } from "@mui/material";
import Header from '../../components/Header';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

import userIconUrl from './user.png';
import driverIconUrl from './truck-solid.svg';
import dustbinIconUrl from './trash-solid.svg';



let Map = () => {
  let [user, setUser] = useState([]);
  let [users, setUsers] = useState([]);

  useEffect(() => {
    const map = L.map('map');
    map.setView([27.67142, 85.3318410], 16);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    let userMarker, driverMarker, dustbinMarker, circle, zoomed;


    async function fetchData() {
      try {
        let userData = await axios.get("http://localhost:5000/userDetail", {
          withCredentials: true
        });
         setUser(userData.data.result);

      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    async function _sendEmail(userEmail) {
      try {
        let msg = await axios.post('http://localhost:5000/sendEmailtoUser', userEmail, { withCredentials: true });
        console.log(msg);
        console.log('sent email');

      }
      catch (error) {
        console.log(error);
      }
    }

    async function getUsersDetails() {
      try {
        let listOfUser = await axios.get('http://localhost:5000/allusers', { withCredentials: true });
        setUsers(listOfUser.data.result);

      }
      catch (error) {
        console.error("Error Fetching all data:", error)
      }
    }

    fetchData();
    getUsersDetails();


    function success(pos) {




      console.log(user)
      console.log(users)


      let accuracy = pos.coords.accuracy;
      let driver_lat = 27.67142; // here I have given our current location randomly
      let driver_lng = 85.33980;

      let dustbin_lat = 27.67135; // here I have given our current location randomly
      let dustbin_lng = 85.33950;





      var driver_latlng;
      var user_latlng;
      var distance;



      //create icon for each entity

      let driverIcon = L.icon({
        iconUrl: driverIconUrl,
        iconSize: [25, 25],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
      });

      let userIcon = L.icon({
        iconUrl: userIconUrl, // Make sure you have the 'user.png' image
        iconSize: [38, 38],
        iconAnchor: [19, 38], // Adjust the anchor point as needed
      });


      let dustbinIcon = L.icon({
        iconUrl: dustbinIconUrl,
        iconSize: [25, 25],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
      });
      //dustbin marker is seen by both user 

      //for citizen role



      if (user!==undefined)
        
      {

        console.log('user')


        if (user.role == 'Citizen') {
          console.log('citizen');



          var user_lat = user.latitude;
          var user_lng = user.longitude;




          if (user_lat !== undefined && user_lng !== undefined) {
            if (userMarker) {
              map.removeLayer(userMarker);
              map.removeLayer(circle);
            }

            
            // Wait for the map to be ready before adding the marker
            map.whenReady(function () {


              dustbinMarker = L.marker([dustbin_lat, dustbin_lng], { icon: dustbinIcon });

              driverMarker = L.marker([driver_lat, driver_lng], { icon: driverIcon });


              userMarker.addTo(map);
              driverMarker
                .addTo(map);
              dustbinMarker.addTo(map);
              circle = L.circle([user_lat, user_lng], { radius: accuracy }).addTo(map);

              if (!zoomed) {
                zoomed = map.fitBounds(circle.getBounds());
              }

            });
            map.setView([user_lat, user_lng]);

          }















        }



        //code for driver
        if (user.role == "Driver") {

          console.log('driver')






          //for now to show using mobile we are not doing this thing
          let driver_lat = pos.coords.latitude;
          let driver_lng = pos.coords.longitude;

          //for each driver_lat and driver_long update to database




          if (driver_lat !== undefined && driver_lng !== undefined) {
            if (driverMarker) {
              map.removeLayer(driverMarker);
              map.removeLayer(circle);
            }



            // Wait for the map to be ready before adding the marker
            map.whenReady(function () {



              dustbinMarker = L.marker([dustbin_lat, dustbin_lng], { icon: dustbinIcon });

              driverMarker = L.marker([driver_lat, driver_lng], { icon: driverIcon });

              driverMarker.addTo(map);
              dustbinMarker.addTo(map);
              circle = L.circle([driver_lat, driver_lng], { radius: accuracy }).addTo(map);

              if (!zoomed) {
                zoomed = map.fitBounds(circle.getBounds());
              }

              map.setView([driver_lat, driver_lng]);
            });





            driver_latlng = L.latLng(driver_lat, driver_lng);
            console.log(driver_latlng);
            console.log(users);




            // for (user of users.list) {
            
            if (user !== undefined)
            {
              if (users.role == 'Citizen') {

                let user_lat = users.latitude;
                let user_lng = users.longitude;
                var _userEmail = users.email;

                let emailData = {
                  email: _userEmail,
                };




                user_latlng = L.latLng(user_lat, user_lng);
                console.log(user_latlng);
                distance = driver_latlng.distanceTo(user_latlng);

                console.log(distance)

                if (distance < 500) {


                  _sendEmail(emailData);




                }


              }

              }
                
            // }



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
