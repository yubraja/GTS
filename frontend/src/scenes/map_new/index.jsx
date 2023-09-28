import React, { useEffect } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import './YourCSSFile.css'; // Replace with the path to your CSS file

import emailjs from 'emailjs-com';

const MapComponent = () => {
    useEffect(() => {
        const map = L.map('map').setView([0.6716736, 85.3318410], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);

        const driver_lat = 27.67142;
        const driver_lng = 85.33980;
        const user_email = 'adhikariyubraj894@gmail.com';

        const driverIcon = L.icon({
            iconUrl: 'garbage_truck.png',
            iconSize: [38, 50],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76],
        });

        const userIcon = L.icon({
            iconUrl: 'user.png',
            iconSize: [38, 38],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76],
        });

        let marker, circle, marker2, zoomed;
        let emailCount = 0;

        const success = (pos) => {
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;
            const accuracy = pos.coords.accuracy;

            if (marker) {
                map.removeLayer(marker);
                map.removeLayer(circle);
            }

            marker = L.marker([lat, lng], { icon: userIcon }).addTo(map);
            circle = L.circle([lat, lng], { radius: accuracy }).addTo(map);
            marker2 = L.marker([driver_lat, driver_lng], { icon: driverIcon }).addTo(map);

            if (!zoomed) {
                zoomed = map.fitBounds(circle.getBounds());
            }

            map.setView([lat, lng]);

            const driverLatLng = L.latLng(driver_lat, driver_lng);

            // Check if it's the driver
            if (marker) {
                const userLatLng = L.latLng(lat, lng);
                const vehiclesAround = checkVehiclesAround(userLatLng, driverLatLng);

                if (vehiclesAround) {
                    if (emailCount === 0) {
                        sendEmail(user_email);
                        emailCount++;
                    }
                }
            }
        };

        const checkVehiclesAround = (userLatLng, driverLatLng) => {
            const distance = userLatLng.distanceTo(driverLatLng);

            if (distance < 500) {
                return true;
            }

            return false;
        };

        const error = (err) => {
            if (err.code === 1) {
                alert('Please provide geolocation access!!');
            } else {
                alert('Cannot get current location');
            }
        };

        // Request geolocation
        navigator.geolocation.watchPosition(success, error);
    }, []);

    const sendEmail = (userEmail) => {
        // Implement your email sending logic here using emailjs or any other service
    };

    return (
        <div>
            <h1>Map User Location</h1>
            <div id="map" style={{ height: '850px' }}></div>
        </div>
    );
};

export default MapComponent;
