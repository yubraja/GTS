// main.js

// Initialize map
var map = L.map('map').setView([0.6716736, 85.3318410], 13);

// Add tile layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    maxZoom: 18
}).addTo(map);

// main.js

// Add markers for user locations
var user1Marker = L.marker([0, 0]).addTo(map);
var user2Marker = L.marker([0, 0]).addTo(map);

// main.js

// Update marker positions using Geolocation API
function updateMarkerPositions() {
    // Get user1's location
    navigator.geolocation.getCurrentPosition(function(position) {
        var user1Latitude = position.coords.latitude;
        var user1Longitude = position.coords.longitude;
        user1Marker.setLatLng([user1Latitude, user1Longitude]);
    });

    // Get user2's location
    navigator.geolocation.getCurrentPosition(function(position) {
        var user2Latitude = position.coords.latitude;
        var user2Longitude = position.coords.longitude;
        user2Marker.setLatLng([user2Latitude, user2Longitude]);
    });
}

// Call the updateMarkerPositions() function periodically to update the markers
setInterval(updateMarkerPositions, 5000); // Update every 5 seconds (adjust as needed)


// main.js

// Customize marker icons
var user1Icon = L.icon({
    iconUrl: 'user1.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

var user2Icon = L.icon({
    iconUrl: 'user2.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

// Set marker options
user1Marker.setIcon(user1Icon);
user2Marker.setIcon(user2Icon);

// Add popups
user1Marker.bindPopup('User 1');
user2Marker.bindPopup('User 2');




