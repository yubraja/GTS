function fetchUserLocation() {
     const nominatimEndpoint = 'https://nominatim.openstreetmap.org/search';

    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                document.getElementById('latitude').innerHTML(latitude);
                document.getElementById('longitude').innerHTML(longitude);
                //const query = `lat=${latitude}&lon=${longitude}&format=json`;

            //     fetch(`${nominatimEndpoint}?${query}`)
            //         .then(response => response.json())
            //         .then(data => {
            //             if (data && data.length > 0) {
            //                 const address = data[0].display_name;

            //                 document.getElementById('latitude').value = latitude;
            //                 document.getElementById('longitude').value = longitude;

            //                 console.log('Fetched Address:', address);
            //             }
            //         })
            //         .catch(error => {
            //             console.error('Error fetching location data:', error);
            //         });
             },
            function (error) {
                console.error('Error getting user location:', error);
            }
        );
    } else {
        console.error('Geolocation is not supported by this browser.');
    }
}

// document.getElementById('signup-form').addEventListener('submit', function (event) {
//     event.preventDefault();

//     // Perform form validation and submission here
//     // const formData = new FormData(this);
//     const latitude = formData.get('latitude');
//     const longitude = formData.get('longitude');
//     console.log(latitude);
//     console.log(longitude);

//     // Include the latitude and longitude in the form data
//     // before submitting the form to the server




//     // formData.set('latitude', latitude);
//     // formData.set('longitude', longitude);



//     // Perform the form submission or AJAX request
//     // to submit the data to the server
//     // Example using fetch:



//     // fetch('signup_endpoint', {
//     //     method: 'POST',
//     //     body: formData
//     // })
//     // .then(response => response.json())
//     // .then(data => {
//     //     // Handle the response from the server
//     //     console.log(data);
//     // })
//     // .catch(error => {
//     //     console.error('Error submitting the form:', error);
//     // });
// });
