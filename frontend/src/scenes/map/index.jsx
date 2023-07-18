import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import garbageTruck from './garbage_truck.png'
import  user from './user.png'


const MapComponent = () => {
  useEffect(() => {
    let map = L.map('map');
    map.setView([0.6716736, 85.3318410], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    let marker, circle, zoomed;

    function success(pos) {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      const accuracy = pos.coords.accuracy;
      const driver_lat = 27.67142; // here i have given our current location ramdomly
      const driver_lng = 85.33980;

      const driverIcon = L.icon({
        iconUrl: garbageTruck,
        iconSize: [38, 50],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
      });

      const userIcon = L.icon({
        iconUrl: user,
        iconSize: [38, 38],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
      });

      if (marker) {
        map.removeLayer(marker);
        map.removeLayer(circle);
      }

      marker = L.marker([lat, lng], { icon: userIcon }).addTo(map);
      circle = L.circle([lat, lng], { radius: accuracy }).addTo(map);

      if (!zoomed) {
        zoomed = map.fitBounds(circle.getBounds());
      }

      map.setView([lat, lng]);
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
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Map User Location</h1>
      <div id="map" style={{ height: '850px' }}></div>
    </div>
  );
};

export default MapComponent;
